import { onDraw } from '@entities/draw/model/draw'
import drawLine from './draw-line'

const drawOnMouseMove = (context: CanvasRenderingContext2D) => (event: MouseEvent) => {
    const { offsetX, offsetY, movementX, movementY } = event

    if (!!event.buttons) {
        drawLine(context, [event])

        onDraw({ offsetX, offsetY, movementX, movementY })
    }
}

export default drawOnMouseMove
