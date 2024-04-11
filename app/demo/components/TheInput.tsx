import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function TheInput() {
  return (
    <Card>
      <CardHeader>TheInput</CardHeader>
      <CardContent className="flex gap-2">
        <Input></Input>
      </CardContent>
    </Card>
  )
}
