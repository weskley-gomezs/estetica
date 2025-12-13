export const WHATSAPP_NUMBER = "5561981535040";

export const openWhatsApp = (message: string = "Olá! Gostaria de agendar uma avaliação na Serene Aesthetics e saber mais sobre os tratamentos.") => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};