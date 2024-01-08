import { email, formattedLandlineNumber, formattedPhoneNumber } from '@/site'

interface ContactOption {
  title: string
  content: string
}

const contactOptions: ContactOption[] = [
  // Landline
  {
    title: 'Fale direto na secretaria',
    content: formattedPhoneNumber,
  },

  // WhatsApp
  {
    title: 'Nos chame diretamente',
    content: formattedLandlineNumber,
  },
  // Email
  {
    title: 'Envie um email',
    content: email,
  },
]

export { contactOptions }
