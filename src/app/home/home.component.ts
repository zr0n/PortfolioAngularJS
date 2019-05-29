import { Component, OnInit } from '@angular/core';

import { Job, JobImage, YoutubeVideo } from "../../types"
import { EmbedVideoService } from 'ngx-embed-video'
import { Category } from '../../types/category'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs : Job[];
  allJobs : Job[];
  selectedCategory: Number = 1;
  embedVideoService : EmbedVideoService;

  constructor(embedVideoService : EmbedVideoService){
    this.embedVideoService = embedVideoService;

    this.setupJobs();
  }

  ngOnInit(){

  }

  selectCategory(categoryNumber : Number) : void{
    this.selectedCategory = categoryNumber;
    this.updateJobs();
  }
  updateJobs() : void{
    console.log("Starting the search...")
    this.jobs =
      this.allJobs.filter((job: Job) => {
        let accepted : Boolean =
          job.categories.find(category => {
            return category == this.selectedCategory
          }) != undefined;
        if(accepted){
          console.log('Job Accepted: ', job);
        }
        return accepted;
      });
    console.log("Jobs", this.jobs);
  }


  setupJobs() : void {
    this.jobs = [];
    this.allJobs = []
  
    //mock
    let job0 : Job = new Job(this.embedVideoService) ; // Academigo
    let job1 : Job = new Job(this.embedVideoService); // BBlender
    let job2 : Job = new Job(this.embedVideoService); // Churroz Game Engine
    let job3 : Job = new Job(this.embedVideoService);
    let job4 : Job = new Job(this.embedVideoService);
    let job5 : Job = new Job(this.embedVideoService);
    let job6 : Job = new Job(this.embedVideoService);
    let job7 : Job = new Job(this.embedVideoService);
    let job8 : Job = new Job(this.embedVideoService);
    let job9 : Job = new Job(this.embedVideoService);
    let job10 : Job = new Job(this.embedVideoService);
    let job11: Job = new Job(this.embedVideoService);
    let job12: Job = new Job(this.embedVideoService);

    job0.setupWithImage(
      "Utilitário para musculação, auxilia nos treinos diários",
      [Category.Android, Category.Java],
      "https://lh3.googleusercontent.com/gAcUzHVzPBcAskKLlFJIbnuTVs2SISeV91ZuJntLPZxs7ru5rZ7tzo1FrfsZIc8qVdu_ry6ODY3cO_Q5BQUYOyRKOG9f3ilId40BmuJTmR5BLCr9nZeWinjsvz5vFyW96o8qmi0q-yG0bDMUAi1A6aOT5pnntxBkxUc6DaTGufim5m5BHBN8_jmFHdzAq6FKDCHrBefDoDiLBNiwg_90VDHfpB3NNj9PT0zi9JjB3ow-2IA5p62Nrxy92m4P7ZUcVyKxravP5boepww08okljQBuZsL1XJwciJpNje4TUd8DdFuKnKo3uP4jpU9fQgSze71IYO-IZhMI2HyyouKnRH1Us-LnSWflaPwaSn-J77YwveDcCkS4dnKpwmbZ61IFySLdLT0gDc7RIAAowbEXuyzAil-dSfpxZppa4yryfo-gdD8ITUpb1DNuxp8ODNycpV33XtIDKW0nbSIeYszP3aYsoyp3Gvwc6gGQ6neS53eeLfZDPXzm5iApQrc3WhqiPknQHi8mg3EdZYvTLzTaZhA2SA1_jdzWsAX9-_X53L5wcEGJ_HmZpgtSCP53UBSQFEa1Gn7j0wTV8PmOupd8oxCgxSeVWJzS9IbPlaQyIQ9HK3MzMjarTQ-36saJEwMh892i3q9t19cVASM4D-MdFUuLsPX5qlI=w526-h936-no"
    );


    job1.setupWithImage(
      "Portfólio online feito para a agência de publicidade Blender",
      [Category.Javascript],
      "https://www.dropbox.com/s/n6kjb4otq4f9ecu/Home.png?dl=0"
    );


    job2.setupWithImage(
      "Uma game engine usando DirectX 11 https://github.com/zr0n/churroz",
      [Category.C],
      "https://www.dropbox.com/s/9wpuhxgrdj202kj/Screenshot_2019-05-29%20zr0n%20churroz.png?dl=0"
    );

    job3.setupWithImage(
      "Limpe os videos do watch later do youtube (Extensão para Firefox) https://github.com/zr0n/ClearWatchLaterVideos",
      [Category.Javascript],
      "https://www.dropbox.com/s/i50syj02ztkhibx/Image.png?dl=0"
    );

    job4.setupWithVideo(
      "Um jogo desenvolvido para smartphones usando Unity Engine",
      [Category.Unity],
      "https://youtu.be/mDV-g5btxxM"
    );

    job5.setupWithImage(
      "Aplicativo que envolve gamification desenvolvido para a ESPM.",
      [Category.Javascript],
      "https://www.dropbox.com/s/mpe5214nltd6dv4/missao_espm_capa.png?dl=0"
    );

    job6.setupWithImage(
      "Esse aplicativo foi feito utilizando apenas um smartphone. Foi um desafio que eu me fiz",
      [Category.Java],
      "https://www.dropbox.com/s/yl0pcajpslk4g2t/Image.png?dl=0"
    );

    job7.setupWithImage(
      "Controle o cursor do windows utilizando um joystick https://github.com/zr0n/JoyfulMouse",
      [Category.C],
      "https://www.dropbox.com/s/2fee6man15f9ovf/Image.png?dl=0"
    );

    job8.setupWithImage(
      "Plugin que permite usar joysticks genéricos no Unreal Engine 4 https://github.com/zr0n/Joyztick",
      [Category.C],
      "https://www.dropbox.com/s/14hu4uvs2hgj3mq/Image.png?dl=0"
    );

    job9.setupWithVideo(
      "Um jogo multiplayer para smartphones utilizando react native e NodeJS",
      [Category.Javascript],
      "https://www.youtube.com/watch?v=mMCPDqlHi2w"
    );

    job10.setupWithImage(
      `Controle o windows usando um smartphone
      Client: https://github.com/zr0n/SmartPCApp
      Server: https://github.com/zr0n/SmartPCServer`,
      [Category.C_Sharp],
      "https://www.dropbox.com/s/n5h5ua8mixih7yj/Image.png?dl=0"
    );

    job11.setupWithVideo(
      "Um game feito para android usando Unreal Engine 4 (usando praticamente apenas C++) https://play.google.com/store/apps/details?id=com.souluizfernando.StarTrix",
      [Category.C, Category.CPP, Category.Unreal],
      "https://youtu.be/PAeXFe6mhEE"
    );

    job12.setupWithImage(
      "Um plugin que renderiza widgets UMG em texturas",
      [Category.C, Category.CPP, Category.Unreal],
      "https://www.youtube.com/watch?v=Dm7gzVpfPK0"
    );

    
    this.allJobs.push(job0, job1, job2, job3, job4, job5, job6, job7, job8, job9, job10, job11, job12);
    this.jobs = this.allJobs
    this.updateJobs()
  }
}
