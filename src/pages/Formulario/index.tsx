import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ZodError } from "zod";
import {
  memberSchema,
  memberUpdateSchema,
  levelOptions,
  modalityOptions,
} from "../../schemas/Member";
import { cloudinaryService } from "../../services/Cloudinary";
import { membersService } from "../../services/Members";
import type { MemberCard } from "../../types/user";
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

type MemberForm = MemberCard & { password: string };

const initialForm: MemberForm = {
  fullName: "",
  email: "",
  password: "",
  modality: "Parapente",
  level: "Aluno",
  annuityValidUntil: "",
  bloodType: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  healthPlan: "Nao possui",
  photoUrl: "",
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
          password: "",
          photoUrl: member.photoUrl || "",
        }),
      )
      .catch(() => messageError("Nao foi possivel carregar o usuario."));
  }, [userId]);

  const updateField = (field: keyof MemberForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
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
      if (isEditing && userId) {
        const payload = memberUpdateSchema.parse(form);
        await membersService.update(userId, payload);
        messageSuccess("Usuario atualizado", "Carteirinha atualizada.");
      } else {
        const payload = memberSchema.parse(form);
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
            <label htmlFor="password">
              {isEditing ? "Nova senha" : "Senha inicial"}
            </label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(event) => updateField("password", event.target.value)}
              placeholder={isEditing ? "Deixe em branco para manter" : ""}
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
            <select
              id="level"
              value={form.level}
              onChange={(event) => updateField("level", event.target.value)}
            >
              {levelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
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
            <input
              id="bloodType"
              value={form.bloodType}
              onChange={(event) => updateField("bloodType", event.target.value)}
              placeholder="O+"
            />
          </Field>

          <Field>
            <label htmlFor="emergencyContactName">Contato de emergencia</label>
            <input
              id="emergencyContactName"
              value={form.emergencyContactName}
              onChange={(event) =>
                updateField("emergencyContactName", event.target.value)
              }
            />
          </Field>

          <Field>
            <label htmlFor="emergencyContactPhone">
              Telefone de emergencia
            </label>
            <input
              id="emergencyContactPhone"
              value={form.emergencyContactPhone}
              onChange={(event) =>
                updateField("emergencyContactPhone", event.target.value)
              }
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
