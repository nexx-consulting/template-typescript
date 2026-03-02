// Teste v3 - validar Claude Review com model ID corrigido
export function formatarCNPJ(cnpj: string): string {
  const limpo = cnpj.replace(/\D/g, "");
  return limpo.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}
