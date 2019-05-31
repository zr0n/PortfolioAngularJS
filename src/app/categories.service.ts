import { Injectable } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video'
import { OnInit } from '@angular/core'


import { Job, Category } from '../types'


class CategoryName {
  public id : Number;
  public name : string;
}

@Injectable({
  providedIn: 'root'
})

class CategoriesService {

  public allJobs : Job[];
  public jobs : Job[];
  public categoriesNames : CategoryName[] = [];

  private embedVideoService : EmbedVideoService;

  private selectedCategory: Number = 0;

  constructor(
    inEmbedVideoService : EmbedVideoService
  )
  
  {
    this.embedVideoService = inEmbedVideoService
    this.updateJobs()
    this.fillCategoriesNames()
  }
  


  public setCategory(newCategory: Number){
    this.selectedCategory = newCategory
    this.filterJobs();

  }

  public filterJobs() : void{
    this.jobs = this.filterJobsInner()
  }

  public searchJob(jobId : Number) : Job{
    let jobFound : Job;
    this.allJobs.map(( job : Job) => {
      if(job.id == jobId)
        jobFound = job
    });
    return jobFound
  }
  private  fillCategoriesNames() : void{
    this.categoriesNames = [
      { name: 'Javascript',    id: Category.Javascript },
      { name: 'Android',       id: Category.Android },
      { name: 'C',             id: Category.C },
      { name: 'C++',           id: Category.CPP },
      { name: 'C#',            id: Category.C_Sharp },
      { name: 'Java',          id: Category.Java },
      { name: 'Unity Engine',  id: Category.Unity },
      { name: 'Unreal Engine', id: Category.Unreal },
      { name: 'Other',         id: Category.Other }
    ]
  }
  private makeJobs() : Job[]{
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
      "Academigo",
      "Utilitário para musculação, auxilia nos treinos diários",
      [Category.Android, Category.Java],
      "https://lh3.googleusercontent.com/gAcUzHVzPBcAskKLlFJIbnuTVs2SISeV91ZuJntLPZxs7ru5rZ7tzo1FrfsZIc8qVdu_ry6ODY3cO_Q5BQUYOyRKOG9f3ilId40BmuJTmR5BLCr9nZeWinjsvz5vFyW96o8qmi0q-yG0bDMUAi1A6aOT5pnntxBkxUc6DaTGufim5m5BHBN8_jmFHdzAq6FKDCHrBefDoDiLBNiwg_90VDHfpB3NNj9PT0zi9JjB3ow-2IA5p62Nrxy92m4P7ZUcVyKxravP5boepww08okljQBuZsL1XJwciJpNje4TUd8DdFuKnKo3uP4jpU9fQgSze71IYO-IZhMI2HyyouKnRH1Us-LnSWflaPwaSn-J77YwveDcCkS4dnKpwmbZ61IFySLdLT0gDc7RIAAowbEXuyzAil-dSfpxZppa4yryfo-gdD8ITUpb1DNuxp8ODNycpV33XtIDKW0nbSIeYszP3aYsoyp3Gvwc6gGQ6neS53eeLfZDPXzm5iApQrc3WhqiPknQHi8mg3EdZYvTLzTaZhA2SA1_jdzWsAX9-_X53L5wcEGJ_HmZpgtSCP53UBSQFEa1Gn7j0wTV8PmOupd8oxCgxSeVWJzS9IbPlaQyIQ9HK3MzMjarTQ-36saJEwMh892i3q9t19cVASM4D-MdFUuLsPX5qlI=w526-h936-no"
    );


    job1.setupWithImage(
      "BBlender",
      "Portfólio online feito para a agência de publicidade Blender",
      [Category.Javascript],
      "https://www.dropbox.com/s/n6kjb4otq4f9ecu/Home.png?dl=0"
    );


    job2.setupWithImage(
      "Churroz Game Engine",
      "Uma game engine usando DirectX 11 https://github.com/zr0n/churroz",
      [Category.C],
      "https://lh3.googleusercontent.com/iJ9VIPOsnDlLRT73vAAvcr2YXuY2P0imNB19NWVIGKht3bUPZ6bMMNN2Gri_5I43q05rq_50H5jUr-DproJc0TEu6-ktUUrwQKrOu0ouoZlVmuCU6Cj78HmgzwH96Yd85xoKAEg_ogdMHtYCk5a81nyW-hXUWvo0scnED3nsRdf_dRcB4qlClNAO7RAtw4iy0yAB4S88AlpHBb5la60B2Vz9HKgCWrSl0jwEFG92aTpTqyZ0FgsClhvZpl3cJd518vOfcf6AqjzeuJ6SDu_gVtYe1SIsxYLvpwaPIz4lpyR5dSLwb9JxYYQXOlj_U4zvK9YZZ1Hy2nIulvBizmsCewTkZxh48CTBmRcm79IKB03BIj8n0EgzJnd0sui19Plf-bKkEqyt7N-3wCaXctmALOJlsHRkmivmZXhidZcoFNIi1IUkjPgqKD8e06Z8UjuELhct6KslyTegZkWvMjYRifNrNJ01kTU1N6QLf-Wyf17zOEzhdBVLD8-1gWl4Tm7O7rZEV_9e0SQ3y_z-jbHKwbyK7tzFCNgp00YhPr25nUj_2x75JEMXHoHnnJbp2Xdc_mnfeaX5pDm-ibov8eZFBJB0sV0a-ZYdHBgjB-cLIzAqhTPHCeElQESPOYt-Zxn_1IgSkMpd3BjW2-XC3J1f41cnWkKPJi1uDMXG6LW2rHThhUcwMpfxCw8VxVxXGBYUBuui4L3Hn7EEzE2UZkNZZimM=w1073-h647-no"
    );

    job3.setupWithImage(
      "Clear Watch Later Videos",
      "Limpe os videos do watch later do youtube (Extensão para Firefox) https://github.com/zr0n/ClearWatchLaterVideos",
      [Category.Javascript],
      "https://lh3.googleusercontent.com/SPZmVPV5wKVbEF6EjA-V3VvJZgccb7-PhkL7c6xwuwS45ZYAGuH-HeSX6UGgSBVwHhOajuSv2rWp1lMJ5gfUbp4UIwcu1tdT0N6BKU102QUY5YxKZP3zxSUWvl0XlLCZSttT7fRBZa7-tWAMRBAlT2HtoZFbWaNHPxD5pCbfw79i0-lzQfKgNTjxP9XCey5kwUMIBf44dH9HcQWIInWvKc1K_1Zw6QPakDomL9QDeYg9OY7a5bCtPe7_VSQcu5-VBooC5i360wo-oQAgG98hBtd2U1SaTtxXEjL7qzPhK0w2j1pAB99sdiNQkCtGUJsWN90xCobpxvFx7xdpI4p57NUR3YQ4_klBKxasop6sTg_InEaF5hbiwVM_0MB2vVipGCxhu4RG8_SuRMxswAnxTL8fBhmKASTKoCjnkjyyhmOGnMO8y5Rt_OVMxwLTEtO-2i5UDw7plF6iuigJwdqT8Ded6AEZlB_vyQ8HqDEHWuWzUnwzB3UZvwiUHsbf7sS6IoBhZBxMwKaInfmYGwZ7w7fJ9ka61y-QtoHtQnkzagTU4SQcyiWkYU67sZ-cszRv6kmJ6v29VM7o2jOKHww1-NIE8unHL0GsX-nQYGjypgHHkkGsrr6KpsDYbEiSiWG785t8XCcTHwdpXkKokemeJG1gtjlAMlpA3Uof3ApZRdezOvG4NoRhMM6Nch3376K08EUzKIgbUPNJa0hcgmZhbTUb=w365-h74-no"
    );

    job4.setupWithVideo(
      "Equilibrall",
      "Um jogo desenvolvido para smartphones usando Unity Engine",
      [Category.Unity],
      "https://youtu.be/mDV-g5btxxM"
    );

    job5.setupWithImage(
      "Laboratório ESPM",
      "Aplicativo que envolve gamification desenvolvido para a ESPM.",
      [Category.Javascript],
      "https://lh3.googleusercontent.com/1aMWYusmB4b0xWYyv-n2jWqOSRQInPUORCOQWFFdhIj3pMd_mhBF5FYk1ubnZARX0gSiRM8N30XimoQa_nywxxa9jOljGQwJ80UE3LBrWvWXT3TzrCfwkD1eYWZf974RkoU1rdBS05XfIJGzw8XyaIsDazcvXNea2xpD2bISL2UAcQWFwbvud4qCMJBd4DtsoPUxp2V3pmK8pRR1uHSOcBIulOe34oMmJW2UHF7rLvUzmhRhcQoJcxGyXxgoWqliYwYjA2EEdN8rXpCpKe6V3GPgBdEKgit6Tggc78lZmfrcGzhyPVhhxfm2Qoi3sQRDg4v4vta5F5H_v7laFq-RetBy7zmXBJMIGaXiMfGmBgONDT9D0tIh8takNIoo130JOLVx9gAFgnMeHND2-EjAV748BnbSVJsb5bmJjNkqyrxLmV93aNJiZS2KpAzUL3wM2W0uUjmWF9adtAyHt8Ebi9rjNEOHWHMzOVBIhzJVaei_WzCh94sJcx3vRtM96Rlkbn8nkLeouZZVTKlMphWYtzg3s1mndgKEhM96Zm7I3kn0focRyYtZKw0yduJZpmsEM58ARe7unjCJ_D_LBRJLTQiyMhK_Dz1FGs0Mmn6f7ZUyJMPNmM7H5BTpHb3prI0uwfSYY-pQ025-KIQ_QJOlZhnjcGubMyoyOCFZ6-2aTQet94Kk6zfjq1xC2SMMLxi2Q9yHIbzYiB3pT99k_Lk7OHXb=w1285-h936-no"
    );

    job6.setupWithImage(
      "App Forca LF",
      "Esse aplicativo foi feito utilizando apenas um editor java para smartphone. Foi um desafio que eu me fiz",
      [Category.Java],
      "https://lh3.googleusercontent.com/9km2UN4zq45C9JwCVTP-8T4gPSa_Y4uNQfZIuQqRH8a1fkp5jpGg6IfPg5fb_a8k_YFgJIjmXrkb2Rv0e9io0GOb-kK6eFWc8t8mZCnCqn-lHfA8reT1CUbOyJwOnAiIr0dHQnjVQ6KIiq-QPJ9kE7YBeBryZavo9Kkrxc4X27zg_zYIbT-lIYGeC6IY2TLZuzEt0kBvKs5bofXb_0oNw0A87Y-WnZeU7mQuGF26hjDnYj3ulK1NQ-zYIPcBnYtPwivdxAlV2JpQa2L9qWU5BbLQ6I2BKciepq4wUuX9fjfG-0EQVOrUbW_7YXhz5GmImO8A0GIq3Uh84Xua6EFxDqt0pf6FyqXu82KKlq6f-dn0hJpITCpG14VQnRaZCNeZaJuf4VP-mAQvR7o0O9vjV3thujq7OqUjMnWQkTSU4-5-cZlGBTmJf-n0CXjmE490G-zxnB6In1cR5VPC1oxQVFGpmvs4evEDUsbzZsGI2tma7Cvhn9e6m5YuDORrOsRr9MJIKlMMr8QvmY4nUURUYW5oerULhs7t8kyvwmNDWi1GwpcDLAmKktRrFwbUOT4zNbG1puBFmLx9QPNurMT6l7v5F0BdVbp88PAMhwH8R4diDcSN9sy4Z_cwMHHWuq_5wE0_NGjdKQ2QOld4SPMA6TrDMv84lXKSGxn174c-hplBCj4Nq1ukgF9ILvSdKfzoE9z-sjvBn4ge9CBMQamKy5Yb=w553-h311-no"
    );

    job7.setupWithImage(
      "Joyful Mouse",
      "Controle o cursor do windows utilizando um joystick https://github.com/zr0n/JoyfulMouse",
      [Category.C],
      "https://lh3.googleusercontent.com/t29qRm3SL1RXnY9s3FksG2M05M2_gF-Ql1vcg9tcSwCF90ziEqp1jy-WQF_gnvg-YH3W8ffPjCRVKf0NHwu0y8Q-VOgeuf5bJ68WHy6LwVVl_eULWcOehON08MlEAf7m5hml9TCXjHYo9vc_Q-GCcjXbOBDcsPOTfTmEZOizsTCObzznjP3DQjRtT98RQcYijXa1ELfzlk2gIiTRhxO-EuY0vzTKjsVugOmAQN9wBgRmOdFDxaHINiKzOmuqW-sqVL-VcJHMdFsJ5vKsFfYJcr53G-tXT7Rjzd_3i1xvfuQ4oxpakkVT85KaFdQBh2v4XNa1Oe7rLGHienLzfUi-swcw8D6MpKlqQq5J30ClltafYwMekKjyYFqUxybMh7BonIRWxjuteWBQX10lSCpSmMAq9vWuk0lxgZAqDfGHdXfHL88GyUMU6L0Hr9ir0tMMPANwL9GvFSN5Uoe0ldx1xa3E_bvRLL_i1qBEUkKxjlG2wdK4dBWJ59XirRZZ1QQGbuuUTGy1fd0TPG-fPXSqdCImwf1YnbmMV5L5NclE-Dc_WcuN74PlEF0wN0fxD19tX3572xEhyLVx60_wdP4xcQAq8hWn3fmtI4jmdQlbsM_wZShrOmmEK19ZuyVc06crEfs-uqbexh6fXSNTIajVu0__Wmm1UE9LDStKnUZ81ddffDdlBr4SkZGi0W8jcwRbnK0i8j6makCt0SRk4RcqYMB3=w978-h489-no"
    );

    job8.setupWithImage(
      "Joystickz",
      "Plugin que permite usar joysticks genéricos no Unreal Engine 4 https://github.com/zr0n/Joyztick",
      [Category.C],
      "https://lh3.googleusercontent.com/10fyyalFNAJC3UFV8IkEbHq7ttYcigVXQIPjBMIjF4qV7EuT8u8eUifIjmxSm3ZgBNwiS8EDWC4dedevULAoWKIdOso5A2O-5MI9JMfYLykIMg-LTDdRuL7IUjYDf2xvlzqSEODTzZUVFItMqRtqIe9ao3zo3MummFRVr-ggXSFcqYy_QSJ81SSZvHAyB_b2HNMeInWMh3HCZrKAfvvwqH0m5oxEFaSkRTPENNgQ4QwsA0-Yn_77P8-WqgR3ilqokfFom9k9F0JCn9UAJUCvTmXkXblniRQKYPuFeKWp3ir1OSpu0WUcQm-yR9j4HKTVhKjnLgzgdMeas0xJIfS8qDqgoN99R7SNNtcrg5TDs_QvVeJ2Y48f6e0_T5YK9IDm72maVECLFKUw1T-Ct5B8y3Uo11OzY1YKNYpXBq4HzpRq8oX6pMT-uzFkH5VtokrSWtomxe8OxHv6oLmQEIa-uoiGliq4dVuWCZnhOt1C-Lw6WBc2GyVCbChPkUXF92bCNdJmmmFvkZLXzcoaLYXSC-SwfF4I5U9i27KaHHyRwNV2ypuNqLYP1CmnITeMqosdfsjMWGc4e6u4qoij_mkiImugil3VA47gmFFZTAyN20hNuE8Dl__4VWXew3bUS89On_rm34npDOCrkDcW2YHxlfcVTUVccFKNGswNPxiflnRSH_59SuJaaKZ8xbj0nbSKUUF89LMgrS32PZc4y-zeA2wt=w259-h194-no"
    );

    job9.setupWithVideo(
      "Mana Source",
      "Um jogo multiplayer para smartphones utilizando react native e NodeJS",
      [Category.Javascript],
      "https://www.youtube.com/watch?v=mMCPDqlHi2w"
    );

    job10.setupWithImage(
      "Smart PC",
      `Controle o windows usando um smartphone
      Client: https://github.com/zr0n/SmartPCApp
      Server: https://github.com/zr0n/SmartPCServer`,
      [Category.C_Sharp],
      "https://lh3.googleusercontent.com/CXtLREafhc2OeBqitQI3TNAFbZBemxfqp2pGcGxsjZlFfffxD83_LA9709i-VOtOiA4oN1lPG1qb4T8cISE51TXk3EPNFYpHBbgsHU6fv6u2QBvhELtD9OeR77tqDA_soLbc9REo8VcG7zd01wVGE1FfBAnh02cqH2j5aBIZnB5VJXfMddmKdbngkbyzvZ6bp7RkwkCMn28RAxkJgjzenpAkmyXA_vc29S5cKSQ5VDw3ftW7B8VdrHhTIWRAAQMhZKbaaTkpzSjkwa1hXcojF-OxfF2Wj7mTacS01KgMWMBVg6_K57b1VZDWhbklSaVUhCMUirH1_ZTcI_qN0uA-expBrkovCmSkW7rSNJHcCxvQFjN5vaEt6oofwKqqgCRAMizs8lmhbcGdtoveqqJCmS0-nC0p7OHf9mtScQkG3skfsKU0mNlr7rSuFX6Mld2LbhoFwEWWTT_k1pIjuSg892cv977yYX_33Y3FGN0qX0KQNIAg4Tuhi83QGWHFWtGDzFEJcX6igeP6s6JzaNUBltzKUh9EFUHy5AwkxUl8mKK9drn9kNMx9sB2YHEy1Ld7CcoTo9_WwqQcxKHD6uYC98ATfP1aWbMiwqEj6nqOAhkXp-YQ3jEigpjIjgzH1GUldmqcwptU9ZUpOgIDZYay9zcwigIHDU4OsGT6iFJ0cNSlFZCTSf0qmqVobbJm4AF4mU5zA7knwuhbsKy-UAGRMo_G=w791-h936-no"
    );

    job11.setupWithVideo(
      "Startrix",
      "Um game feito para android usando Unreal Engine 4 (usando praticamente apenas C++) https://play.google.com/store/apps/details?id=com.souluizfernando.StarTrix",
      [Category.C, Category.CPP, Category.Unreal],
      "https://youtu.be/PAeXFe6mhEE"
    );

    job12.setupWithImage(
      "Widget To Texture",
      "Um plugin que renderiza widgets UMG em texturas",
      [Category.C, Category.CPP, Category.Unreal],
      "https://www.youtube.com/watch?v=Dm7gzVpfPK0"
    );

    let allJobs : Job[] = [];
    allJobs.push(job0, job1, job2, job3, job4, job5, job6, job7, job8, job9, job10, job11, job12);
    return allJobs
  }

  updateJobs() : void{
    this.allJobs = this.makeJobs()
  }

  private filterJobsInner():Job[]{
    let jobs : Job[] =
      this.allJobs.filter((job: Job) => {
        let accepted : Boolean =
          job.categories.find(category => {
            return category == this.selectedCategory
          }) != undefined;
          
        return accepted;
      });
      return jobs;


  }

  
}

export { CategoriesService, CategoryName }
