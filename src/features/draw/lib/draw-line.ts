import { DrawCoords } from '@entities/draw/types'

const drawLine = (context: CanvasRenderingContext2D, coords: DrawCoords[]) => {
    context.beginPath()

    coords.forEach(({ offsetX, offsetY, movementX, movementY }) => {
        context.moveTo(offsetX, offsetY)
        context.lineTo(offsetX - movementX, offsetY - movementY)
    })

    context.stroke()
    context.closePath()
}

export default drawLine
