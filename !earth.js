class Earth{
    constructor(x,y,radius){
        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        this.image = loadImage('sprites/earth.png');

        this.image1 = loadImage('sprites/frame_00_delay-0.01s.png');
        this.image2 = loadImage('sprites/frame_02_delay-0.01s.png');
        this.image3 = loadImage('sprites/frame_04_delay-0.01s.png');
        this.image4 = loadImage('sprites/frame_07_delay-0.01s.png');
        this.image5 = loadImage('sprites/frame_10_delay-0.01s.png');
        this.image6 = loadImage('sprites/frame_11_delay-0.01s.png');
        this.image7 = loadImage('sprites/frame_13_delay-0.01s.png');
        this.image8 = loadImage('sprites/frame_15_delay-0.01s.png');
        this.image9 = loadImage('sprites/frame_17_delay-0.01s.png');

        this.angle = 1;
        this.frames = 1;

        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        this.frames = this.frames + 1;

        if(this.frames > 9){
            this.frames = 1;
        }

        switch (this.frames){
            case 1:
            image(this.image1,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            case 2:
            image(this.image2,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            case 3:
            image(this.image3,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            case 4:
            image(this.image4,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            case 5:
            image(this.image5,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            case 6:
            image(this.image6,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            case 7:
            image(this.image7,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            case 8:
            image(this.image8,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            case 9:
            image(this.image9,this.body.position.x,this.body.position.y,this.radius,this.radius);
            break;
            default:
            break;
        }
    }

    move(){
        this.angle = this.angle + 50;
        this.body.position.x = 200 * cos(this.angle * PI/180) + 400;
        this.body.position.y = 200 * sin(this.angle * PI/180) + 350;
    }
}