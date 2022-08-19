import { PaintCoords } from '@entities/paint/types'

const drawLine = (context: CanvasRenderingContext2D, coords: PaintCoords) => {
    context.beginPath()

    context.moveTo(coords.offsetX, coords.offsetY)
    context.lineTo(coords.offsetX - coords.movementX, coords.offsetY - coords.movementY)

    context.stroke()
    context.closePath()
}

export default drawLine
