import { email, formattedLandlineNumber, formattedPhoneNumber } from '@/site'

interface ContactOption {
  title: string
  label: string
  content: string
}

const contactOptions: ContactOption[] = [
  // Landline
  {
    title: 'Fale direto na secretaria',
    label: 'Telefone Fixo',
    content: formattedPhoneNumber,
  },

  // WhatsApp
  {
    title: 'Nos chame diretamente',
    label: 'WhatsApp',
    content: formattedLandlineNumber,
  },
  // Email
  {
    title: 'Envie um email',
    label: 'Email',
    content: email,
  },
]

export { contactOptions }
