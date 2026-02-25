'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useState } from 'react'

interface ConfirmDrawerProps {
  title: string
  description?: string
  confirmFn?: () => void
  children?: React.ReactNode
}

export function ConfirmDrawer ({ title, description, confirmFn, children }: ConfirmDrawerProps) {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    confirmFn?.()
    setOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {children}
        {/* <Button variant='outline' className={triggerClassName} disabled={disabled}>{openText}</Button> */}
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            {description && <DrawerDescription>{description}</DrawerDescription>}
          </DrawerHeader>

          <DrawerFooter>
            <Button onClick={handleConfirm}>Confirm</Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
