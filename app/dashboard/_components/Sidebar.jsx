import 'react'
import { useDisclosure, useRadioGroup } from '@chakra-ui/react'
import { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
  
    return (
      <>
      <div className='h-full'>
        <Menu onClick={onOpen} />
        <div className='w-96 h-full absolute bg-white'>
            <Drawer  placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
        </div>
      </div>
      </>
    )
  }