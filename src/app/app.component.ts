import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

function getKeyframes() {
  var frame = [];
  for (var i = 0; i < 100; i++) {
    var topVal = "{{topVal_"+(i+1)+"}}";
    frame.push(style({ top: topVal + 'px' }));
  }
  return frame;
}

const dropKeyframes: any = getKeyframes();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('dropball', [
      transition('false => true', [
        animate("{{dropTime}} ease-in", keyframes(dropKeyframes))
      ], {
          params: {
            dropTime: 0,
            topVal_1: 0,
            topVal_2: 0,
            topVal_3: 0,
            topVal_4: 0,
            topVal_5: 0,
            topVal_6: 0,
            topVal_7: 0,
            topVal_8: 0,
            topVal_9: 0,
            topVal_10: 0,
            topVal_11: 0,
            topVal_12: 0,
            topVal_13: 0,
            topVal_14: 0,
            topVal_15: 0,
            topVal_16: 0,
            topVal_17: 0,
            topVal_18: 0,
            topVal_19: 0,
            topVal_20: 0,
            topVal_21: 0,
            topVal_22: 0,
            topVal_23: 0,
            topVal_24: 0,
            topVal_25: 0,
            topVal_26: 0,
            topVal_27: 0,
            topVal_28: 0,
            topVal_29: 0,
            topVal_30: 0,
            topVal_31: 0,
            topVal_32: 0,
            topVal_33: 0,
            topVal_34: 0,
            topVal_35: 0,
            topVal_36: 0,
            topVal_37: 0,
            topVal_38: 0,
            topVal_39: 0,
            topVal_40: 0,
            topVal_41: 0,
            topVal_42: 0,
            topVal_43: 0,
            topVal_44: 0,
            topVal_45: 0,
            topVal_46: 0,
            topVal_47: 0,
            topVal_48: 0,
            topVal_49: 0,
            topVal_50: 0,
            topVal_51: 0,
            topVal_52: 0,
            topVal_53: 0,
            topVal_54: 0,
            topVal_55: 0,
            topVal_56: 0,
            topVal_57: 0,
            topVal_58: 0,
            topVal_59: 0,
            topVal_60: 0,
            topVal_61: 0,
            topVal_62: 0,
            topVal_63: 0,
            topVal_64: 0,
            topVal_65: 0,
            topVal_66: 0,
            topVal_67: 0,
            topVal_68: 0,
            topVal_69: 0,
            topVal_70: 0,
            topVal_71: 0,
            topVal_72: 0,
            topVal_73: 0,
            topVal_74: 0,
            topVal_75: 0,
            topVal_76: 0,
            topVal_77: 0,
            topVal_78: 0,
            topVal_79: 0,
            topVal_80: 0,
            topVal_81: 0,
            topVal_82: 0,
            topVal_83: 0,
            topVal_84: 0,
            topVal_85: 0,
            topVal_86: 0,
            topVal_87: 0,
            topVal_88: 0,
            topVal_89: 0,
            topVal_90: 0,
            topVal_91: 0,
            topVal_92: 0,
            topVal_93: 0,
            topVal_94: 0,
            topVal_95: 0,
            topVal_96: 0,
            topVal_97: 0,
            topVal_98: 0,
            topVal_99: 0,
            topVal_100: 0,
          }
        })
    ])
  ]
})

export class AppComponent {

  @ViewChild('ball') ball: ElementRef;
  @ViewChild('surface') surface: ElementRef;

  dropBall: boolean = false;
  dropTime: number = 0;
  ballTop: number = 0;

  meterToPix: number = 50;

  heightInMeter: number;
  heightInPix: number;

  ngOnInit() {
    this.heightInPix = this.calculateHeight();
    this.setMeterHeight();
  }

  calculateHeight() {
    return this.surface.nativeElement.offsetTop - this.ball.nativeElement.offsetTop - 50;
  }

  setPixelHeight(){
    this.heightInPix = Math.round(this.heightInMeter*this.meterToPix);
  }

  setMeterHeight(){
    this.heightInMeter = this.heightInPix/this.meterToPix;
  }

  droppedToSurface(event){
    this.heightInPix = 0;
    this.setMeterHeight();
  }

  dropTheBall() {
    this.dropTime = 0.456 * Math.sqrt(this.heightInPix/this.meterToPix);
    this.ballTop = this.ball.nativeElement.offsetTop;
    
    for (var i = 0; i < 100; i++) {
      this["topVal_"+(i+1)] = this.ballTop + ( (0.0001 * (i + 1) * (i + 1)) * this.heightInPix);
    }
    
    this.dropBall = true;

    setTimeout(
      () => {
        this.dropBall = false;
      }, (this.dropTime * 1000) + 1000
    );
  }

  ballPosition() {
    return (this.surface.nativeElement.offsetTop - this.heightInPix - 50) + 'px';
  }
}
