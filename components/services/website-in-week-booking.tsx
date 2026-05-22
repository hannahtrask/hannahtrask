'use client'

import { BookingCard } from '@/components/contact/contact-form'

export default function WebsiteInWeekBooking() {
  return (
    <BookingCard
      title='Book Website in a Week'
      description='Choose a time that works for you and we will map the fastest path to launch.'
      panelId='website-in-week-booking-panel'
      widgetClassName='hb-p-68ab7f800c8dd7002e944c41-3'
      loadingLabel='Loading booking options...'
    />
  )
}
