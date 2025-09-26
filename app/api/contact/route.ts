import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  completionDate: z.string().optional(),
  budget: z.string().optional(),
  instagram: z.string().optional(),
  website: z.string().optional(),
  services: z.enum(
    ['branding', 'web-design-development', 'illustration', 'other'],
    {
      required_error: 'Please select a service',
    }
  ),
  vision: z
    .string()
    .min(10, 'Please tell us about your vision (at least 10 characters)'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Using Resend's test domain for now
      to: ['hctrask@gmail.com'],
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      html: `
        <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #f9f4ef 0%, #d8bfa2 100%); padding: 30px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="color: #794d18; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>

          <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #794d18; margin: 0 0 8px 0; font-size: 16px;">From:</h3>
              <p style="margin: 0; color: #333; font-size: 16px;">${validatedData.name}</p>
              <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;">${validatedData.email}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #794d18; margin: 0 0 8px 0; font-size: 16px;">Subject:</h3>
              <p style="margin: 0; color: #333; font-size: 16px;">${validatedData.subject}</p>
            </div>

            ${
              validatedData.completionDate
                ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #794d18; margin: 0 0 8px 0; font-size: 16px;">Requested Completion Date:</h3>
              <p style="margin: 0; color: #333; font-size: 16px;">${validatedData.completionDate}</p>
            </div>
            `
                : ''
            }

            ${
              validatedData.budget
                ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #794d18; margin: 0 0 8px 0; font-size: 16px;">Estimated Budget:</h3>
              <p style="margin: 0; color: #333; font-size: 16px;">${validatedData.budget}</p>
            </div>
            `
                : ''
            }

            ${
              validatedData.instagram
                ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #794d18; margin: 0 0 8px 0; font-size: 16px;">Instagram Handle:</h3>
              <p style="margin: 0; color: #333; font-size: 16px;">${validatedData.instagram}</p>
            </div>
            `
                : ''
            }

            ${
              validatedData.website
                ? `
            <div style="margin-bottom: 20px;">
              <h3 style="color: #794d18; margin: 0 0 8px 0; font-size: 16px;">Website:</h3>
              <p style="margin: 0; color: #333; font-size: 16px;">${validatedData.website}</p>
            </div>
            `
                : ''
            }

            <div style="margin-bottom: 20px;">
              <h3 style="color: #794d18; margin: 0 0 8px 0; font-size: 16px;">Services Interested In:</h3>
              <p style="margin: 0; color: #333; font-size: 16px;">${validatedData.services === 'web-design-development' ? 'Web Design + Development' : validatedData.services.charAt(0).toUpperCase() + validatedData.services.slice(1)}</p>
            </div>

            <div>
              <h3 style="color: #794d18; margin: 0 0 8px 0; font-size: 16px;">Vision:</h3>
              <div style="background: #f9f4ef; padding: 20px; border-radius: 4px; border-left: 4px solid #a36f3f;">
                <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${validatedData.vision}</p>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 0;">This email was sent from your website contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${validatedData.name} (${validatedData.email})
Subject: ${validatedData.subject}
${validatedData.completionDate ? `Requested Completion Date: ${validatedData.completionDate}` : ''}
${validatedData.budget ? `Estimated Budget: ${validatedData.budget}` : ''}
${validatedData.instagram ? `Instagram Handle: ${validatedData.instagram}` : ''}
${validatedData.website ? `Website: ${validatedData.website}` : ''}
Services Interested In: ${validatedData.services === 'web-design-development' ? 'Web Design + Development' : validatedData.services.charAt(0).toUpperCase() + validatedData.services.slice(1)}

Vision:
${validatedData.vision}

---
This email was sent from your website contact form.
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      console.error('Full error details:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully!', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}
