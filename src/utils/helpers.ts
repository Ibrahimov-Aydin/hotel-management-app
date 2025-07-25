export const formatCurrency = (value: number | null): string =>
  value !== null
    ? new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
      }).format(value)
    : '—';
