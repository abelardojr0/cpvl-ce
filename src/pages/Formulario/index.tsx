import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ZodError } from "zod";
import {
  bloodTypeOptions,
  memberSchema,
  memberUpdateSchema,
  modalityOptions,
} from "../../schemas/Member";
import { cloudinaryService } from "../../services/Cloudinary";
import { membersService } from "../../services/Members";
import type { MemberCard } from "../../types/user";
import { onlyNumbers } from "../../utils/Masks";
import { messageError, messageSuccess } from "../../utils/toast";
import {
  Field,
  FormActions,
  FormGrid,
  FormShell,
  HeaderActions,
  ModalActions,
  ModalBackdrop,
  ModalCard,
  PageHeader,
  PhotoField,
  SecondaryButton,
  SubmitButton,
  DangerButton,
} from "./style";

type MemberForm = MemberCard;

const initialForm: MemberForm = {
  fullName: "",
  email: "",
  cpf: "",
  modality: "Parapente",
  level: "",
  annuityValidUntil: "",
  bloodType: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  healthPlan: "",
  photoUrl: "",
};

const formatCpf = (value: string) => {
  const numbers = onlyNumbers(value).slice(0, 11);

  return numbers
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
};

const formatPhone = (value: string) => {
  const numbers = onlyNumbers(value).slice(0, 11);

  if (numbers.length <= 10) {
    return numbers
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/^(\(\d{2}\) \d{4})(\d)/, "$1-$2");
  }

  return numbers
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/^(\(\d{2}\) \d{5})(\d)/, "$1-$2");
};

export const Formulario = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const isEditing = Boolean(userId);
  const [form, setForm] = useState<MemberForm>(initialForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!userId) return;

    membersService
      .cardByUserId(userId)
      .then((member) =>
        setForm({
          ...member,
          cpf: member.cpf || "",
          photoUrl: member.photoUrl || "",
        }),
      )
      .catch(() => messageError("Nao foi possivel carregar o usuario."));
  }, [userId]);

  const updateField = (field: keyof MemberForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const updateCpf = (value: string) => {
    updateField("cpf", formatCpf(value));
  };

  const updatePhone = (value: string) => {
    updateField("emergencyContactPhone", formatPhone(value));
  };

  const handlePhotoUpload = async (file?: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      messageError("Selecione um arquivo de imagem.");
      return;
    }

    setUploading(true);

    try {
      const photoUrl = await cloudinaryService.uploadImage(file);
      updateField("photoUrl", photoUrl);
      messageSuccess("Foto enviada", "A imagem foi vinculada ao cadastro.");
    } catch {
      messageError("Nao foi possivel enviar a foto.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);

    try {
      const normalizedForm = {
        ...form,
        healthPlan: form.healthPlan.trim() || "Nao possui",
      };

      if (isEditing && userId) {
        const payload = memberUpdateSchema.parse(normalizedForm);
        await membersService.update(userId, payload);
        messageSuccess("Usuario atualizado", "Carteirinha atualizada.");
      } else {
        const payload = memberSchema.parse(normalizedForm);
        await membersService.create(payload);
        messageSuccess("Usuario cadastrado", "Carteirinha pronta para acesso.");
      }

      navigate("/");
    } catch (error) {
      if (error instanceof ZodError) {
        messageError(error.issues[0]?.message || "Confira os campos.");
      } else {
        messageError(
          isEditing
            ? "Nao foi possivel atualizar o usuario."
            : "Nao foi possivel cadastrar o usuario.",
        );
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!userId) return;

    setDeleting(true);

    try {
      await membersService.delete(userId);
      messageSuccess("Usuario excluido", "Cadastro removido com sucesso.");
      navigate("/");
    } catch {
      messageError("Nao foi possivel excluir o usuario.");
    } finally {
      setDeleting(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <section>
      <PageHeader>
        <div>
          <span>{isEditing ? "Edicao" : "Cadastro"}</span>
          <h1>{isEditing ? "Editar usuario" : "Novo usuario"}</h1>
        </div>
        <HeaderActions>
          <Link to="/">Voltar</Link>
        </HeaderActions>
      </PageHeader>

      <FormShell onSubmit={handleSubmit}>
        <PhotoField>
          <div>
            {form.photoUrl ? (
              <img
                src={form.photoUrl}
                alt={`Foto de ${form.fullName || "usuario"}`}
              />
            ) : (
              <span>Foto</span>
            )}
          </div>
          <label htmlFor="photo">
            {uploading ? "Enviando foto..." : "Enviar foto do computador"}
            <input
              id="photo"
              type="file"
              accept="image/*"
              disabled={uploading}
              onChange={(event) => handlePhotoUpload(event.target.files?.[0])}
            />
          </label>
        </PhotoField>

        <FormGrid>
          <Field>
            <label htmlFor="fullName">Nome completo</label>
            <input
              id="fullName"
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
            />
          </Field>

          <Field>
            <label htmlFor="email">E-mail de acesso</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </Field>

          <Field>
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              inputMode="numeric"
              value={form.cpf}
              onChange={(event) => updateCpf(event.target.value)}
              placeholder="000.000.000-00"
            />
          </Field>

          <Field>
            <label htmlFor="modality">Modalidade</label>
            <select
              id="modality"
              value={form.modality}
              onChange={(event) => updateField("modality", event.target.value)}
            >
              {modalityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field>
            <label htmlFor="level">Nivel</label>
            <input
              id="level"
              value={form.level}
              onChange={(event) => updateField("level", event.target.value)}
              placeholder="Insira o nivel do piloto"
            />
          </Field>

          <Field>
            <label htmlFor="annuityValidUntil">Validade da anuidade</label>
            <input
              id="annuityValidUntil"
              type="month"
              value={form.annuityValidUntil}
              onChange={(event) =>
                updateField("annuityValidUntil", event.target.value)
              }
            />
          </Field>

          <Field>
            <label htmlFor="bloodType">Tipo sanguineo</label>
            <select
              id="bloodType"
              value={form.bloodType}
              onChange={(event) => updateField("bloodType", event.target.value)}
            >
              <option value="" disabled>
                Selecione
              </option>
              {bloodTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>

          <Field>
            <label htmlFor="emergencyContactName">
              Nome do contato de emergencia
            </label>
            <input
              id="emergencyContactName"
              value={form.emergencyContactName}
              onChange={(event) =>
                updateField("emergencyContactName", event.target.value)
              }
              placeholder="Nome do contato de emergencia"
            />
          </Field>

          <Field>
            <label htmlFor="emergencyContactPhone">
              Telefone de emergencia
            </label>
            <input
              id="emergencyContactPhone"
              value={form.emergencyContactPhone}
              onChange={(event) => updatePhone(event.target.value)}
              placeholder="(00) 00000-0000"
            />
          </Field>

          <Field>
            <label htmlFor="healthPlan">Plano de saude</label>
            <input
              id="healthPlan"
              value={form.healthPlan}
              onChange={(event) =>
                updateField("healthPlan", event.target.value)
              }
              placeholder="Nao possui"
            />
          </Field>
        </FormGrid>

        <FormActions>
          <SubmitButton type="submit" disabled={saving || uploading}>
            {saving
              ? "Salvando..."
              : isEditing
                ? "Salvar alteracoes"
                : "Cadastrar usuario"}
          </SubmitButton>

          {isEditing && (
            <DangerButton
              type="button"
              onClick={() => setShowDeleteModal(true)}
              disabled={saving || uploading}
            >
              Excluir usuario
            </DangerButton>
          )}
        </FormActions>
      </FormShell>

      {showDeleteModal && (
        <ModalBackdrop role="presentation">
          <ModalCard
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-title"
          >
            <span>Confirmacao</span>
            <h2 id="delete-title">Excluir usuario?</h2>
            <p>
              Esta acao remove o cadastro e a carteirinha de {form.fullName}.
            </p>
            <ModalActions>
              <SecondaryButton
                type="button"
                onClick={() => setShowDeleteModal(false)}
                disabled={deleting}
              >
                Cancelar
              </SecondaryButton>
              <DangerButton
                type="button"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? "Excluindo..." : "Sim, excluir"}
              </DangerButton>
            </ModalActions>
          </ModalCard>
        </ModalBackdrop>
      )}
    </section>
  );
};
