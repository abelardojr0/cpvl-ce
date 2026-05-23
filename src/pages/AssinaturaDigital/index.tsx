import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { settingsService } from "../../services/Settings";
import { messageError, messageSuccess } from "../../utils/toast";
import {
  Actions,
  CanvasBox,
  Header,
  PageShell,
  Preview,
  SignatureCard,
} from "./style";

export const AssinaturaDigital = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const [savedSignature, setSavedSignature] = useState<string | null>(null);
  const [hasStroke, setHasStroke] = useState(false);

  const drawSavedSignature = (signatureDataUrl: string) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const image = new Image();
    image.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      setHasStroke(true);
    };
    image.src = signatureDataUrl;
  };

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    context.scale(ratio, ratio);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = 3;
    context.strokeStyle = "#061727";

    if (savedSignature) {
      drawSavedSignature(savedSignature);
    }
  };

  useEffect(() => {
    settingsService
      .getSignature()
      .then((settings) => {
        setSavedSignature(settings.signatureDataUrl);
        if (settings.signatureDataUrl) {
          drawSavedSignature(settings.signatureDataUrl);
        }
      })
      .catch(() => setSavedSignature(null));
  }, []);

  useEffect(() => {
    setupCanvas();
    window.addEventListener("resize", setupCanvas);

    return () => window.removeEventListener("resize", setupCanvas);
  }, [savedSignature]);

  const getPoint = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const rect = canvas?.getBoundingClientRect();

    if (!rect) return { x: 0, y: 0 };

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    drawingRef.current = true;
    canvas.setPointerCapture(event.pointerId);
    const point = getPoint(event);
    context.beginPath();
    context.moveTo(point.x, point.y);
  };

  const draw = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;

    const context = canvasRef.current?.getContext("2d");
    if (!context) return;

    const point = getPoint(event);
    context.lineTo(point.x, point.y);
    context.stroke();
    setHasStroke(true);
  };

  const stopDrawing = () => {
    drawingRef.current = false;
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    setSavedSignature(null);
    setHasStroke(false);
  };

  const saveSignature = async () => {
    const canvas = canvasRef.current;

    if (!canvas || !hasStroke) {
      messageError("Desenhe uma assinatura antes de salvar.");
      return;
    }

    try {
      const signatureDataUrl = canvas.toDataURL("image/png");
      const settings = await settingsService.saveSignature(signatureDataUrl);
      setSavedSignature(settings.signatureDataUrl);
      messageSuccess("Assinatura salva", "Ela ja aparece no verso da carteirinha.");
    } catch {
      messageError("Nao foi possivel salvar a assinatura.");
    }
  };

  return (
    <PageShell>
      <Header>
        <div>
          <span>Area administrativa</span>
          <h1>Assinatura digital</h1>
        </div>
        <Link to="/">Voltar</Link>
      </Header>

      <SignatureCard>
        <CanvasBox>
          <canvas
            ref={canvasRef}
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerCancel={stopDrawing}
            onPointerLeave={stopDrawing}
          />
        </CanvasBox>

        <Actions>
          <button type="button" onClick={clearSignature}>
            Limpar
          </button>
          <button type="button" onClick={saveSignature}>
            Salvar assinatura
          </button>
        </Actions>
      </SignatureCard>

      <Preview>
        <span>Assinatura no verso</span>
        {savedSignature ? (
          <img src={savedSignature} alt="Assinatura cadastrada" />
        ) : (
          <strong>José Clenylson Campos Cordeiro</strong>
        )}
        <p>Presidente</p>
      </Preview>
    </PageShell>
  );
};
