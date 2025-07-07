'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  completionDate: z.string().optional(),
  budget: z.string().optional(),
  instagram: z.string().optional(),
  website: z.string().optional(),
  services: z.enum(['branding', 'web-design-development', 'other'], {
    required_error: 'Please select a service',
  }),
  vision: z.string().min(10, 'Please tell us about your vision (at least 10 characters)'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      completionDate: '',
      budget: '',
      instagram: '',
      website: '',
      services: undefined,
      vision: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      // Show success toast with animation
      toast.success("Thanks! I'll get back to you ASAP!", {
        duration: 5000,
        style: {
          background: 'linear-gradient(135deg, #f9f4ef 0%, #d8bfa2 100%)',
          border: '1px solid #a36f3f',
          color: '#794d18',
          fontFamily: 'var(--font-montserrat)',
          fontWeight: '500',
        },
        className: 'animate-in slide-in-from-top-2',
      })

      // Reset form
      form.reset()
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again.',
        {
          style: {
            fontFamily: 'var(--font-montserrat)',
          },
        }
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='bg-white dark:bg-desert-800 p-8 md:p-12 shadow-sm'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-playfair font-light text-desert-800 dark:text-desert-100 mb-4'>
            Let's Start a Conversation
          </h2>
          <p className='text-gray-600 dark:text-gray-300 font-light leading-relaxed'>
            Ready to bring your vision to life? I'd love to hear about your
            project and explore how we can work together to create something
            amazing.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Your full name'
                        className='border-desert-200 focus:border-desert-400 focus:ring-desert-400'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='your.email@example.com'
                        className='border-desert-200 focus:border-desert-400 focus:ring-desert-400'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='subject'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Tell me a little bit about what you are looking for!'
                      className='border-desert-200 focus:border-desert-400 focus:ring-desert-400'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='completionDate'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                      Requested Project Completion Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='date'
                        className='border-desert-200 focus:border-desert-400 focus:ring-desert-400'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='budget'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                      Estimated Budget
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='e.g., $5,000 - $10,000'
                        className='border-desert-200 focus:border-desert-400 focus:ring-desert-400'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <FormField
                control={form.control}
                name='instagram'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                      Instagram Handle
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='@yourusername'
                        className='border-desert-200 focus:border-desert-400 focus:ring-desert-400'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='website'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                      Website
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://yourwebsite.com'
                        className='border-desert-200 focus:border-desert-400 focus:ring-desert-400'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='services'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                    What services are you interested in?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-2'
                    >
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='branding' id='branding' />
                        <Label htmlFor='branding'>Branding</Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='web-design-development' id='web-design-development' />
                        <Label htmlFor='web-design-development'>Web Design + Development</Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='other' id='other' />
                        <Label htmlFor='other'>Other (list details below)</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='vision'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-desert-700 dark:text-desert-200 font-medium'>
                    Tell me about your vision!
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Tell me about your project, timeline, and any specific requirements. The more details the better!'
                      className='border-desert-200 focus:border-desert-400 focus:ring-desert-400 min-h-[120px] resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='pt-4'>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-desert-600 hover:bg-desert-700 text-white font-medium py-3 transition-all duration-200'
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className='mr-2 h-4 w-4' />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
