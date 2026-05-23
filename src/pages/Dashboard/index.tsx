import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { membersService } from "../../services/Members";
import type { MemberCard } from "../../types/user";
import {
  Actions,
  ActionGroup,
  DashboardGrid,
  EmptyState,
  MetricCard,
  PageHeader,
  PilotCell,
  StatusPill,
  Table,
} from "./style";

export const Dashboard = () => {
  const [members, setMembers] = useState<MemberCard[]>([]);

  useEffect(() => {
    membersService.list().then(setMembers).catch(() => setMembers([]));
  }, []);

  const activeCards = members.filter((member) => member.status !== "inativo");

  return (
    <section>
      <PageHeader>
        <div>
          <span>Area administrativa</span>
          <h1>Gerenciar usuarios</h1>
        </div>
        <div>
          <Link to="/assinatura">Assinatura digital</Link>
          <Link to="/formulario">Cadastrar usuario</Link>
        </div>
      </PageHeader>

      <DashboardGrid>
        <MetricCard>
          <span>Usuarios</span>
          <strong>{members.length}</strong>
        </MetricCard>
        <MetricCard>
          <span>Carteirinhas ativas</span>
          <strong>{activeCards.length}</strong>
        </MetricCard>
        <MetricCard>
          <span>Modalidades</span>
          <strong>2</strong>
        </MetricCard>
      </DashboardGrid>

      {members.length === 0 ? (
        <EmptyState>
          <h2>Nenhum usuario cadastrado ainda</h2>
          <p>Cadastre o primeiro usuario para gerar a carteirinha digital.</p>
        </EmptyState>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Modalidade</th>
              <th>Nivel</th>
              <th>Anuidade</th>
              <th>Status</th>
              <th>Acoes</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={String(member.id || member.email)}>
                <td data-label="Usuario">
                  <PilotCell>
                    <div>
                      {member.photoUrl ? (
                        <img src={member.photoUrl} alt={`Foto de ${member.fullName}`} />
                      ) : (
                        member.fullName.slice(0, 2).toUpperCase()
                      )}
                    </div>
                    <strong>{member.fullName}</strong>
                  </PilotCell>
                </td>
                <td data-label="E-mail">{member.email}</td>
                <td data-label="Modalidade">{member.modality}</td>
                <td data-label="Nivel">{member.level}</td>
                <td data-label="Anuidade">{member.annuityValidUntil}</td>
                <td data-label="Status">
                  <StatusPill data-status={member.status || "ativo"}>
                    {member.status || "ativo"}
                  </StatusPill>
                </td>
                <td data-label="Acoes">
                  <ActionGroup>
                    <Link to={`/carteirinha/${member.userId}`}>Carteirinha</Link>
                    <Link to={`/formulario/${member.userId}`}>Editar</Link>
                  </ActionGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Actions>
        <Link to="/formulario">Novo cadastro</Link>
      </Actions>
    </section>
  );
};
