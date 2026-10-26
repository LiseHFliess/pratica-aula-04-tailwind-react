import Alert from '../ui/Alert.jsx';
import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';

export default function Exercise08AlertNotification() {
  return (
    <ExerciseSection
      id="ex08"
      number="08"
      title="Alert / Notification"
      description="Feedback visual com quatro variantes semânticas. O conteúdo da mensagem entra por children, e a variante define fundo, ícone e tom do texto sem duplicar o componente."
      tags={['bg-*-50', 'text-*-700', 'rounded-2xl', 'gap-3.5', 'children']}
    >
      <div className="space-y-6">
        <DemoRow label="Variantes" hint="success · warning · error · info">
          <div className="flex flex-col gap-3">
            <Alert variant="success" title="Success">
              Your changes were saved.
            </Alert>
            <Alert variant="warning" title="Atenção">
              Sua sessão expira em 5 minutos.
            </Alert>
            <Alert variant="error" title="Falha no pagamento">
              O cartão foi recusado pelo emissor. Tente outro método.
            </Alert>
            <Alert variant="info" title="Nova versão disponível">
              Atualize o app para acessar os relatórios mais recentes.
            </Alert>
          </div>
        </DemoRow>

        <DemoRow label="Com ação opcional" hint="actionLabel renderiza um botão ao lado">
          <div className="flex flex-col gap-3">
            <Alert variant="error" title="Não foi possível sincronizar" actionLabel="Retry">
              Verifique a conexão e tente novamente.
            </Alert>
            <Alert variant="info" title="Convite pendente" actionLabel="Aceitar">
              Você foi convidado para o workspace <strong>Design System</strong>.
            </Alert>
          </div>
        </DemoRow>
      </div>
    </ExerciseSection>
  );
}
