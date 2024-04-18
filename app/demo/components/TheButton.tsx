'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { EraserIcon } from '@radix-ui/react-icons'

export default function TheButton() {
  
  return (
    <Card>
      <CardHeader>TheButton</CardHeader>
      <CardContent className="flex gap-2">
        <Button variant="outline">outline</Button>
        <Button variant="default">default</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="link">link</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="ghost">ghost</Button>
        <Button size="lg">lg</Button>
        <Button size="sm">sm</Button>
        <Button size="icon"><EraserIcon></EraserIcon></Button>
      </CardContent>
    </Card>
  )
}
