import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  private ORIGIN_TOP: number = 565;
  private ORIGIN_LEFT: number = 955;
  
  private DELTA_TOP_Z_MOVE: number = 46;
  private DELTA_LEFT_Z_MOVE: number = 80;

  private DELTA_TOP_X_MOVE: number = 46;
  private DELTA_LEFT_X_MOVE: number = 80;

  private DELTA_TOP_Y_MOVE: number = 105;
  private DELTA_LEFT_Y_MOVE: number = 0;
  
  private FRAMES_PER_STEP: number = 50;
  
  private stepsPerSecond: number = 5;

  constructor(private host: ElementRef<HTMLElement>) {
    this.setRobotPosition('left', this.ORIGIN_LEFT);
    this.setRobotPosition('top', this.ORIGIN_TOP);
    this.moveZ(-1.3);
  }

  ngOnInit(): void {

    (async () => {
      // await this.wait(5);
      // await this.moveX(-2);
      // await this.moveZ(-4);
      // await this.wait(0.2);
      // await this.moveX(-4);
      // await this.moveY(3);
      // await this.wait(0.5);
      // await this.moveZ(0.5);
      // await this.wait(1);
      // await this.moveY(-3);
      // await this.moveX(4);
      // await this.wait(0.5);
      // await this.moveZ(-0.5);
      // await this.wait(0.5);
      // await this.moveZ(4);
      // await this.moveX(2);
    })();
  }

  getRobotPosition(property:string): number{
    if(property === 'left' || property === 'top'){
      return parseFloat(this.host.nativeElement.style.getPropertyValue(`--${property}`).replace('px',''));
    }
    return 0;
  }

  setRobotPosition(property:string, value:number): void{
    if(property === 'left' || property === 'top'){
      this.host.nativeElement.style.setProperty(`--${property}`, value + 'px');
    }
  }


  moveX(steps:number): Promise<number>{

    let deltaLeftXMove: number;
    let deltaTopXMove: number;

    if(steps > 0) {
      deltaLeftXMove = this.DELTA_LEFT_X_MOVE;
      deltaTopXMove = - this.DELTA_TOP_X_MOVE;
    }
    else{
      deltaLeftXMove = - this.DELTA_LEFT_X_MOVE;
      deltaTopXMove = this.DELTA_TOP_X_MOVE;
    }

    steps = Math.abs(steps);

    return new Promise((resolve) => {
      let i = 0;
      var interval = setInterval(() => {
        let currentLeftProperty = this.getRobotPosition('left');
        let currentTopProperty = this.getRobotPosition('top');
  
        let newLeftProperty = currentLeftProperty + deltaLeftXMove/this.FRAMES_PER_STEP;
        let newTopProperty = currentTopProperty + deltaTopXMove/this.FRAMES_PER_STEP;
        
        this.setRobotPosition('left', newLeftProperty);
        this.setRobotPosition('top', newTopProperty);
  
        if (i === this.FRAMES_PER_STEP * steps) {
          clearInterval(interval);
          resolve(1);
        }
  
        i++;
  
      }, 1000/(this.FRAMES_PER_STEP * this.stepsPerSecond));
    });
  }

  moveY(steps:number): Promise<number>{

    let deltaTopYMove: number;

    if(steps > 0) {
      deltaTopYMove = this.DELTA_TOP_Y_MOVE;
    }
    else{
      deltaTopYMove = - this.DELTA_TOP_Y_MOVE;
    }

    steps = Math.abs(steps);

    return new Promise((resolve) => {
      let i = 0;
      var interval = setInterval(() => {
        let currentTopProperty = this.getRobotPosition('top');
  
        let newTopProperty = currentTopProperty - deltaTopYMove/this.FRAMES_PER_STEP;
        
        this.setRobotPosition('top', newTopProperty);
  
        if (i === this.FRAMES_PER_STEP * steps) {
          clearInterval(interval);
          resolve(1);
        }
  
        i++;
  
      }, 1000/(this.FRAMES_PER_STEP * this.stepsPerSecond));
    });
  }

  moveZ(steps:number): Promise<number>{

    let deltaLeftZMove: number;
    let deltaTopZMove: number;

    if(steps > 0) {
      deltaLeftZMove = this.DELTA_LEFT_Z_MOVE;
      deltaTopZMove = this.DELTA_TOP_Z_MOVE;
    }
    else{
      deltaLeftZMove = - this.DELTA_LEFT_Z_MOVE;
      deltaTopZMove = - this.DELTA_TOP_Z_MOVE;
    }

    steps = Math.abs(steps);

    return new Promise((resolve) => {
      let i = 0;
      var interval = setInterval(() => {
        let currentLeftProperty = this.getRobotPosition('left');
        let currentTopProperty = this.getRobotPosition('top');
  
        let newLeftProperty = currentLeftProperty + deltaLeftZMove/this.FRAMES_PER_STEP;
        let newTopProperty = currentTopProperty + deltaTopZMove/this.FRAMES_PER_STEP;
        
        this.setRobotPosition('left', newLeftProperty);
        this.setRobotPosition('top', newTopProperty);
  
        if (i === this.FRAMES_PER_STEP * steps) {
          clearInterval(interval);
          resolve(1);
        }
  
        i++;
  
      }, 1000/(this.FRAMES_PER_STEP * this.stepsPerSecond));
    });
  }

  wait(seconds:number): Promise<number>{

    seconds = Math.abs(seconds);

    return new Promise((resolve) => {
      let i = 0;
      var interval = setInterval(() => {

        if (i === this.FRAMES_PER_STEP * seconds) {
          clearInterval(interval);
          resolve(1);
        }
  
        i++;
  
      }, 1000/this.FRAMES_PER_STEP);
    });
  }

}



