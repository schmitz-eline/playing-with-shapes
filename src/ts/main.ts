import {drawCross, drawDiamond, drawTriangle, drawCircle, drawRectangle, fillCanvas, shapes} from "./shapes";

(
    function () {
        const app = {
            drawSwissFlag() {
                const canvas: HTMLCanvasElement = document.getElementById('Swiss-flag') as HTMLCanvasElement;
                const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
                fillCanvas('#ff0000', ctx, canvas);
                drawRectangle(ctx, '#fff', canvas.width/2, canvas.height/2, shapes.flag.rect.width, shapes.flag.rect.height);
                drawRectangle(ctx, '#fff', canvas.width/2, canvas.height/2, shapes.flag.rect.width, shapes.flag.rect.height, true, 0, 90);
            },
            drawHome() {
                const canvas: HTMLCanvasElement = document.getElementById('home') as HTMLCanvasElement;
                const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
                ctx.lineWidth = shapes.home.lineWidth;

                // house
                ctx.strokeStyle = shapes.home.houseColor;
                ctx.beginPath();
                // roof
                ctx.moveTo(260, 160);
                ctx.lineTo(300, 120);
                ctx.lineTo(340, 160);
                // walls
                ctx.moveTo(270, 170);
                ctx.lineTo(270, 220);
                ctx.lineTo(330, 220);
                ctx.lineTo(330, 170);
                // door
                ctx.moveTo(290, 220);
                ctx.lineTo(290, 190);
                ctx.lineTo(310, 190);
                ctx.lineTo(310, 220);
                ctx.stroke();

                // waves
                ctx.strokeStyle = shapes.home.wavesColor;
                ctx.beginPath();
                ctx.moveTo(250, 270);
                ctx.bezierCurveTo(300, 250, 300, 300, 360, 270);
                ctx.moveTo(250, 250);
                ctx.bezierCurveTo(300, 230, 300, 280, 360, 250);
                ctx.stroke();

                // tree
                ctx.strokeStyle = shapes.home.treeColor;
                ctx.beginPath();
                ctx.moveTo(200, 220);
                ctx.arcTo(200, 130, 390, 220, 20);
                ctx.stroke();

                // sun
                ctx.fillStyle = shapes.home.sunColor.fill;
                ctx.strokeStyle = shapes.home.sunColor.stroke;
                ctx.beginPath();
                ctx.arc(400, 100, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                ctx.beginPath();
                ctx.arc(400, 105, 15, 0, Math.PI, false);
                ctx.stroke();
            },
            drawMasterCard() {
                const canvas: HTMLCanvasElement = document.getElementById('master-card') as HTMLCanvasElement;
                const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
                fillCanvas('#000', ctx, canvas);
                drawCircle(ctx, shapes.mastercard.opaqueOrangeCircle.color, canvas.width/2+shapes.mastercard.opaqueOrangeCircle.radius/2, canvas.height/2, shapes.mastercard.opaqueOrangeCircle.radius);
                drawCircle(ctx, shapes.mastercard.redCircle.color, canvas.width/2-shapes.mastercard.redCircle.radius/2, canvas.height/2, shapes.mastercard.redCircle.radius);
                drawCircle(ctx, shapes.mastercard.transparentOrangeCircle.color, canvas.width/2+shapes.mastercard.transparentOrangeCircle.radius/2, canvas.height/2, shapes.mastercard.transparentOrangeCircle.radius);
                ctx.beginPath();
                ctx.fillStyle = '#fff';
                ctx.font = '48px Helvetica Neue';
                ctx.textAlign = 'center';
                ctx.fillText('mastercard', canvas.width/2, canvas.height-25);
                ctx.closePath();
            },
            drawTheTriangle() {
                const canvas: HTMLCanvasElement = document.getElementById('triangle') as HTMLCanvasElement;
                const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
                drawTriangle(ctx, shapes.triangle.triangle.color, canvas.width/2, canvas.height/2, shapes.triangle.triangle.width, shapes.triangle.triangle.height);
                drawCircle(ctx, shapes.triangle.whiteCircle.color, canvas.width/2, canvas.height/2, shapes.triangle.whiteCircle.radius);
                drawCircle(ctx, shapes.triangle.blackCircle.color, canvas.width/2, canvas.height/2, shapes.triangle.blackCircle.radius);
            },
            drawShapes() {
                const canvas: HTMLCanvasElement = document.getElementById('shapes') as HTMLCanvasElement;
                const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
                const space: number = 30;
                let xPos: number = space;
                const shapes = [drawCircle, drawTriangle, drawRectangle, drawDiamond, drawCross];
                const colors = ['#fea200', '#01c8b5', '#02befe'];
                let randomPos: number = Math.floor(Math.random() * shapes.length);
                let randomColor: number = Math.floor(Math.random() * colors.length);
                fillCanvas('#08293e', ctx, canvas);
                while (xPos < canvas.width) {
                    // @ts-ignore
                    shapes[randomPos](ctx, colors[randomColor], xPos, canvas.height/2, space, space, Math.random() < 0.1);
                    xPos += space*2;
                    randomPos = Math.floor(Math.random() * shapes.length);
                    randomColor = Math.floor(Math.random() * colors.length);
                }
            },
            init() {
                this.drawSwissFlag();
                this.drawHome();
                this.drawMasterCard();
                this.drawTheTriangle();
                this.drawShapes();
            },
        }
        app.init();
    }
)();