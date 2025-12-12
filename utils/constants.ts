export const WHATSAPP_NUMBER = "5561981535040";

export const openWhatsApp = (message: string = "Olá, Weskley! Fiquei impressionado com o design. Gostaria de comprar este site/template.") => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};