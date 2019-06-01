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
    this.embedVideoService = inEmbedVideoService;
    this.updateJobs();
    this.fillCategoriesNames();
  }
  


  public setCategory(newCategory: Number){
    this.selectedCategory = newCategory;
    this.filterJobs();

  }

  public filterJobs() : void{
    this.jobs = this.filterJobsInner()
  }

  public searchJob(jobId : Number) : Job{
    let jobFound : Job;
    this.allJobs.map(( job : Job) => {
      if(job.id == jobId)
        jobFound = job;
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
      { name: 'NodeJS',        id: Category.NodeJS },
      { name: 'Angular JS',    id: Category.AngularJS},
      { name: 'Other',         id: Category.Other }
    ]
  }
  private makeJobs() : Job[]{
    //mock
    Job.ID_COUNT = 0

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
    let job13: Job = new Job(this.embedVideoService);
    let job14: Job = new Job(this.embedVideoService);
    let job15: Job = new Job(this.embedVideoService);
    let job16: Job = new Job(this.embedVideoService);
    let job17: Job = new Job(this.embedVideoService);
    let job18: Job = new Job(this.embedVideoService);

    job0.setupWithImage(
      "Academigo",
      "Utilitário para musculação, auxilia nos treinos diários",
      [Category.Android, Category.Java],
      "https://lh3.googleusercontent.com/gAcUzHVzPBcAskKLlFJIbnuTVs2SISeV91ZuJntLPZxs7ru5rZ7tzo1FrfsZIc8qVdu_ry6ODY3cO_Q5BQUYOyRKOG9f3ilId40BmuJTmR5BLCr9nZeWinjsvz5vFyW96o8qmi0q-yG0bDMUAi1A6aOT5pnntxBkxUc6DaTGufim5m5BHBN8_jmFHdzAq6FKDCHrBefDoDiLBNiwg_90VDHfpB3NNj9PT0zi9JjB3ow-2IA5p62Nrxy92m4P7ZUcVyKxravP5boepww08okljQBuZsL1XJwciJpNje4TUd8DdFuKnKo3uP4jpU9fQgSze71IYO-IZhMI2HyyouKnRH1Us-LnSWflaPwaSn-J77YwveDcCkS4dnKpwmbZ61IFySLdLT0gDc7RIAAowbEXuyzAil-dSfpxZppa4yryfo-gdD8ITUpb1DNuxp8ODNycpV33XtIDKW0nbSIeYszP3aYsoyp3Gvwc6gGQ6neS53eeLfZDPXzm5iApQrc3WhqiPknQHi8mg3EdZYvTLzTaZhA2SA1_jdzWsAX9-_X53L5wcEGJ_HmZpgtSCP53UBSQFEa1Gn7j0wTV8PmOupd8oxCgxSeVWJzS9IbPlaQyIQ9HK3MzMjarTQ-36saJEwMh892i3q9t19cVASM4D-MdFUuLsPX5qlI=w526-h936-no",
      "https://lh3.googleusercontent.com/4Z16iefX9ir13vKQzPK_80QTDzteE0R8xtfBiKUH51Se4c-2OFldlKUBY4Q9dsdsBXTAfd7VyCMiDHceXnyeJ5weYwmvb3i3ikojDztCPOvbKKZhFFEwQTK5ikc3y5ERa2ct7nGVJPa4NetY_bSvTu7Yp1giCTxyb-Eo8W0aJF3W27zixDXWCumlm2Loi4p1_ljanOeS91jXk2q1mv4oOzSCp5e9m0J6lEC2JPpEYXTR_-8vBETSkeX6bn3iXz4jH3HKj9WIWBKhOk89KZM9NNc6e9Mcyt2juqFJiJUbYFgrTZgwbD86Bp4u65rRX7v5F_hC2lWH_03QpvQSFHY2nJ5IVVHeYb81zgsDpyTqqLvs9EZxzR-cI96u1d9JfX9m9e7nrW25zV11jkBsJNl2VA3bDtElHjQAKwv4ZiUqvVJkD-T-9pDlQjznjUS1PB_HdqAk32QhpGE4Xdroc1FU4dByIczrHZG126MenGOU5jSX3a401_pxSWgR8qNVD88pI87-6EmmCX5fAOny5zHnpbHMkBSrAj_0guPkNlKjv6IwMpt_dN4jdbe7feXziF_OMDNiIr2nPahVKYSm9u392eh1XPKZ2fc6kIMhbdr1QP9xGgVzHI17xvT2LLPDGUmDCCK5CHrNREWM7NDw-Ks7rsnJtoewRAg=s149-no"
      );


    job1.setupWithImage(
      "BBlender",
      "Portfólio online feito para a agência de publicidade Blender",
      [Category.Javascript],
      "https://lh3.googleusercontent.com/5jw0bAPfKh8m5c_4foHLsIxmIrxDv5VDbFWSV9ctyqdzHWnEXMcNd2UK07rUrNtWJxC7688cwV1Z71zRDrton5FzE4FVJnbd7DXh8p-AB4EKBOjjkFY9VyvJ4_t83RKLG2YvkR6DJLowIKqjhEZscZZmz1r7wArooTk5mYYMq4RbbllqTJq1MHVb7uuIGhyiZ4TbXU2mNkln5FDjhmAAuP2jWPpsrCMngNZjX5pmHpMPRBvnxDD4EHPNW62GMU8RSVIjLOyA710d20AAkUjMndIj6PEc-6TGBLNVp1c-tLA_AJ2BQk25B6afeT0Lj8POXUwV9laYkuMi_p8BjOvNLE6CR5JZObhajpAVZkxVXzHOUwll50yVAXBzytu4939RQ1n-ubL4VM71EGvmAK1NagrJ3V4GxwO9BLtmTTx24zJHkBlk23P8l--0uPmGsMkFP18S8iytPMebIHyMJNE_roTLz8xGtmp-G6_g6Swa2gdxLZma1hqA0ECF-HXLEHEkerp3YSuxEvWqPj9mZeUCR1ixN3IPaZ0HRLCkD36y4MlYv5txEXSdyJHteWfw1nIpJ81--iPaPSu6cvdAvKwzDbvWW1qzVsvmCPRvRrdsEMlBTtnbT2Kjr-C5SRdOKzYO8T_r00gimuYzdniZWwqZxEyEXzOZTL8=w1554-h936-no",
      "https://lh3.googleusercontent.com/NE1sZNpp12MRCMYILtI7CkOPfadcj32_AKlF3ZXf2Cf4X3NHtFOSe_nZO8WFcqUkzby2-ZaprY7TjcGfioBseEaN6NYVl-PPBr-c7AWAt9nE-9NJDm3GdTDLW_Lx2JVlvHExl875Fi-1sk694Wb0HoQ_V-RYfgJmx_UlG7cyoF-hZq0-KiOTvxthsjweyAKZ2v_raLNhkrKSUXIQGpDNe0DxE1YLuP4YBXEztnS3yqF3bFqPwkekgXew_mW10sl0Ipd4GMlQF3F94KIj1OR50RFVfWQ95g3n7Q9s3zdRMwFLpG7ntVlEPl4pYVvEOruzxMxdUQGb7QWIJZTqk00BPYg6OpJ5QwsY6aEaz74GiaRpCzA6Eyj8Wb5ZQxHZ62xOkVS60rLd96aLM-sUQozaUxEzl2xRpqdNzTD56NUj82v8VNGEGG6wLUKx6HneLGOwTAXh6CgPvddr3Ig0DXU-ktDku1Dn7NGOCL65thqzC8kgONcspfaoal1RbqtvwFtZZ8XUu1mS1BYgxchr6wqJ1weetVz0EzKNDnljE4zC7j_76JIihLuzSg_QVm6duFI8FJ3_kQe6uU8q3-Q2ULKrnhrOTpiJE2VoBRBmBJnyHxTnyRw3ESvH0cYMuwF_XfgpdwxI0QmPKk80SWg2NTjtxXiFBEULMak=s150-no"
    );


    job2.setupWithImage(
      "Churroz Game Engine",
      "Uma game engine usando DirectX 11 https://github.com/zr0n/churroz",
      [Category.C],
      "https://lh3.googleusercontent.com/iJ9VIPOsnDlLRT73vAAvcr2YXuY2P0imNB19NWVIGKht3bUPZ6bMMNN2Gri_5I43q05rq_50H5jUr-DproJc0TEu6-ktUUrwQKrOu0ouoZlVmuCU6Cj78HmgzwH96Yd85xoKAEg_ogdMHtYCk5a81nyW-hXUWvo0scnED3nsRdf_dRcB4qlClNAO7RAtw4iy0yAB4S88AlpHBb5la60B2Vz9HKgCWrSl0jwEFG92aTpTqyZ0FgsClhvZpl3cJd518vOfcf6AqjzeuJ6SDu_gVtYe1SIsxYLvpwaPIz4lpyR5dSLwb9JxYYQXOlj_U4zvK9YZZ1Hy2nIulvBizmsCewTkZxh48CTBmRcm79IKB03BIj8n0EgzJnd0sui19Plf-bKkEqyt7N-3wCaXctmALOJlsHRkmivmZXhidZcoFNIi1IUkjPgqKD8e06Z8UjuELhct6KslyTegZkWvMjYRifNrNJ01kTU1N6QLf-Wyf17zOEzhdBVLD8-1gWl4Tm7O7rZEV_9e0SQ3y_z-jbHKwbyK7tzFCNgp00YhPr25nUj_2x75JEMXHoHnnJbp2Xdc_mnfeaX5pDm-ibov8eZFBJB0sV0a-ZYdHBgjB-cLIzAqhTPHCeElQESPOYt-Zxn_1IgSkMpd3BjW2-XC3J1f41cnWkKPJi1uDMXG6LW2rHThhUcwMpfxCw8VxVxXGBYUBuui4L3Hn7EEzE2UZkNZZimM=w1073-h647-no",
      "https://lh3.googleusercontent.com/EwiUwusYnuFLoQn8LObYqzXw0cVmvMWmHyh9kYvWZ0RUqTLj49EXfYimm9mXrSIqreEiTJV0eX_qR2rZH_kzLiPnVM_7YIRCtgvMaDh4UA087SaCr1_t1YF2YF_L3gnj7AxvSHA39dQrRoOQpQH4vwfzTxHSfXJSLCGxo5i5AmUEd6okfXhKnWZSWVD2ob333O4fZg-6mLK4GpxkixKEI0BXwQh1CvYWYVPr2otOVJLB1Pl0HJOWxeOBI9XejtisPgE1VmlsYqZyYJGRZjYnFwmIEOziuHjDOqSUNcgdgHrFFyuDyXlAUFiNrphW7bOv4HZA2J9r1FfyOVYD12ibtW2U4HJ1zwSoKKpiv98QSXaXBW6L2I2KJ_lJdI-Fs9PhZW7UndPCUqJkW40QmrkDNvwz_Q5ESlKkvOO97eNkvNx1C4qUfilJfeZ5hhLY7MwEVAHGOblTFrP8nMHdfyG0YNFc6Jihy5GNWm2_mD82YEPox_o6GLfAjRDIbK3mPlserkboAzMdfDHjl9I4W4USGVs848miovu7Ku88ch8zhloVTYAKCwIldsh5CubB-oD_7Lbpgme6oIcu-hnx0smOiJsg909dkOvv1wnEwCQa8mdUpSrPAJH2K493dscHt3MvGZYcS1Yd-k9WJbganJIxsUNq9wfA-ck=s150-no"
    );

    job3.setupWithImage(
      "Clear Watch Later Videos",
      "Limpe os videos do watch later do youtube (Extensão para Firefox) https://github.com/zr0n/ClearWatchLaterVideos",
      [Category.Javascript],
      "https://lh3.googleusercontent.com/SPZmVPV5wKVbEF6EjA-V3VvJZgccb7-PhkL7c6xwuwS45ZYAGuH-HeSX6UGgSBVwHhOajuSv2rWp1lMJ5gfUbp4UIwcu1tdT0N6BKU102QUY5YxKZP3zxSUWvl0XlLCZSttT7fRBZa7-tWAMRBAlT2HtoZFbWaNHPxD5pCbfw79i0-lzQfKgNTjxP9XCey5kwUMIBf44dH9HcQWIInWvKc1K_1Zw6QPakDomL9QDeYg9OY7a5bCtPe7_VSQcu5-VBooC5i360wo-oQAgG98hBtd2U1SaTtxXEjL7qzPhK0w2j1pAB99sdiNQkCtGUJsWN90xCobpxvFx7xdpI4p57NUR3YQ4_klBKxasop6sTg_InEaF5hbiwVM_0MB2vVipGCxhu4RG8_SuRMxswAnxTL8fBhmKASTKoCjnkjyyhmOGnMO8y5Rt_OVMxwLTEtO-2i5UDw7plF6iuigJwdqT8Ded6AEZlB_vyQ8HqDEHWuWzUnwzB3UZvwiUHsbf7sS6IoBhZBxMwKaInfmYGwZ7w7fJ9ka61y-QtoHtQnkzagTU4SQcyiWkYU67sZ-cszRv6kmJ6v29VM7o2jOKHww1-NIE8unHL0GsX-nQYGjypgHHkkGsrr6KpsDYbEiSiWG785t8XCcTHwdpXkKokemeJG1gtjlAMlpA3Uof3ApZRdezOvG4NoRhMM6Nch3376K08EUzKIgbUPNJa0hcgmZhbTUb=w365-h74-no",
      "https://lh3.googleusercontent.com/gOvLOdqAOWkL2cl043fVGdjUziFDVQxi7uqaOmx-5Kx_kIIKvEnJHby3XF_HHC903bP857L-j9u3b_YpcCb_EzsU_9xyCQHHhvg_ODtsYAFBzvy79oRGarpMJE3IblH0EsWIOoIOSdiKwpXCSnFoWTPunyILBu1sM0nfGA744vdvYfG910ZsqYJ7BjR3MkBNHgCOEbEdBtLU6tVP7KOVueIDAGPHZRCKJUnWnNc2pEeeqw6JVilI9ZI6XkMuRIlYODQK4uI2OHbm5w7HKQAMdT4JA2T2UBMbJ0NFXFIb4q4Bgaio7x7conR4mxNNObameUqZgH_olHdBrxUyxiXqoOWhWZrV88EVGyTJpzb5budoHSE8t3Q7u5_dylF7rnc_AlBjmQiouvlIIBOSrMeat4Rtx83TkpyUVgEnrsbPtigAT2qhbrp5Wmzl9ebPiDp0toMoyX4rvQGfIhLQIw2fDEvdITO183iStN2-WiheqXg2jzvZ-YXSDK5f7hMHMzn9KD5BMe4geznuEQ3GSkOgufWcuDhSz79dV8Zu2VkL8f3iTx_Iz5VkOTJQZZJTSwgi_M_WhC7KmDzl9e-p2YPzUyN0WSv7wnAcVmQra7ixT376u1v-_vs2gKjT2-FQVx85JIAxuyMWW_c9Ye1T1DSulq4X_x-QAGlYFCczmdQn0LyRQUilhDPgghWfVlTwKhZMqCmL9va4m1oVgUG7l7VSNRlo=s150-no"
    );

    job4.setupWithVideo(
      "Equilibrall",
      "Um jogo desenvolvido para smartphones usando Unity Engine",
      [Category.Unity, Category.C_Sharp],
      "https://youtu.be/mDV-g5btxxM",
      "https://lh3.googleusercontent.com/vVD9r-IGoCGOMcn3lNIWlktHqzwic9BCqFDh0pVijvwgPebySdzRLHDpDUj9WsTaOYo=s180"
    );

    job5.setupWithImage(
      "Laboratório ESPM",
      "Aplicativo que envolve gamification desenvolvido para a ESPM.",
      [Category.Javascript],
      "https://lh3.googleusercontent.com/1aMWYusmB4b0xWYyv-n2jWqOSRQInPUORCOQWFFdhIj3pMd_mhBF5FYk1ubnZARX0gSiRM8N30XimoQa_nywxxa9jOljGQwJ80UE3LBrWvWXT3TzrCfwkD1eYWZf974RkoU1rdBS05XfIJGzw8XyaIsDazcvXNea2xpD2bISL2UAcQWFwbvud4qCMJBd4DtsoPUxp2V3pmK8pRR1uHSOcBIulOe34oMmJW2UHF7rLvUzmhRhcQoJcxGyXxgoWqliYwYjA2EEdN8rXpCpKe6V3GPgBdEKgit6Tggc78lZmfrcGzhyPVhhxfm2Qoi3sQRDg4v4vta5F5H_v7laFq-RetBy7zmXBJMIGaXiMfGmBgONDT9D0tIh8takNIoo130JOLVx9gAFgnMeHND2-EjAV748BnbSVJsb5bmJjNkqyrxLmV93aNJiZS2KpAzUL3wM2W0uUjmWF9adtAyHt8Ebi9rjNEOHWHMzOVBIhzJVaei_WzCh94sJcx3vRtM96Rlkbn8nkLeouZZVTKlMphWYtzg3s1mndgKEhM96Zm7I3kn0focRyYtZKw0yduJZpmsEM58ARe7unjCJ_D_LBRJLTQiyMhK_Dz1FGs0Mmn6f7ZUyJMPNmM7H5BTpHb3prI0uwfSYY-pQ025-KIQ_QJOlZhnjcGubMyoyOCFZ6-2aTQet94Kk6zfjq1xC2SMMLxi2Q9yHIbzYiB3pT99k_Lk7OHXb=w1285-h936-no",
      "https://lh3.googleusercontent.com/HB1blctJIYGSQiS7LPTChT3HCuLggU2WfB1voj2zCVGDuCItFLzXez49u5OhW2Ba90PqZYfIZcwWITd9D9xTWtCpgd6zIWmlTf9lIgkEr887nuEOgoIj53G-QCgbBuZHpx9AfiLz_dvcaoE6bE_im1XxFwpxhhVCSTEMcm3dLhOWKbFn7sM4KFRjjKGM1g-CwJu8FMepLxdJuKE7yS3x_i1e_jMNSJDa7BP4vY_jRD_DJN8HaIF2p_0ThFMGmGRkE3nZn3nxMefHtp0GEqE9xKMqtR5-KsrLqHxFS8pK6hqo4l5IP1rZNHYtSBOpMCxpzBKaYGNMP-dpxnVleTvMSKV0XzWh4QhVLmaVYG-71CPRPT9xWzrVfBpfAu-Z70pQmYKFkSGtETXkmA5_TDaU_KWeop2TwT28D9qUBhyYoxjgSF-ZEXfLkZO7E3G6Geci3VWNzHCxrfnRMjj6pjBudBrdgNQM1optYwmMlpLfAMfmN1W5BmOxG9dkVnw0zCB3IngtP2SkcL4qCfoeBM6z0bnve7j3LmRITsK6Hy9qKJvKtlcCFOf7C7mSfmwArj97mLNdrDcSmITgt9YjDOQA-4G-XJGUktwEQNIdhiOHdH9Y_NOEJyV0vW-Z5eP2ZrJQHpCNuE1vdKoT1snnuf8Ja7xTsKl5bv2D-y07yTt8qRkLbhKy-P1zKtUBSOejfgnSUXWfJIdiYI1wXsCTtTsRXZFj=s150-no"
    );

    job6.setupWithImage(
      "App Forca LF",
      "Esse aplicativo foi feito utilizando apenas um editor java para smartphone. Foi um desafio que eu me fiz",
      [Category.Java],
      "https://lh3.googleusercontent.com/9km2UN4zq45C9JwCVTP-8T4gPSa_Y4uNQfZIuQqRH8a1fkp5jpGg6IfPg5fb_a8k_YFgJIjmXrkb2Rv0e9io0GOb-kK6eFWc8t8mZCnCqn-lHfA8reT1CUbOyJwOnAiIr0dHQnjVQ6KIiq-QPJ9kE7YBeBryZavo9Kkrxc4X27zg_zYIbT-lIYGeC6IY2TLZuzEt0kBvKs5bofXb_0oNw0A87Y-WnZeU7mQuGF26hjDnYj3ulK1NQ-zYIPcBnYtPwivdxAlV2JpQa2L9qWU5BbLQ6I2BKciepq4wUuX9fjfG-0EQVOrUbW_7YXhz5GmImO8A0GIq3Uh84Xua6EFxDqt0pf6FyqXu82KKlq6f-dn0hJpITCpG14VQnRaZCNeZaJuf4VP-mAQvR7o0O9vjV3thujq7OqUjMnWQkTSU4-5-cZlGBTmJf-n0CXjmE490G-zxnB6In1cR5VPC1oxQVFGpmvs4evEDUsbzZsGI2tma7Cvhn9e6m5YuDORrOsRr9MJIKlMMr8QvmY4nUURUYW5oerULhs7t8kyvwmNDWi1GwpcDLAmKktRrFwbUOT4zNbG1puBFmLx9QPNurMT6l7v5F0BdVbp88PAMhwH8R4diDcSN9sy4Z_cwMHHWuq_5wE0_NGjdKQ2QOld4SPMA6TrDMv84lXKSGxn174c-hplBCj4Nq1ukgF9ILvSdKfzoE9z-sjvBn4ge9CBMQamKy5Yb=w553-h311-no",
      "https://lh3.googleusercontent.com/tmArf4w9ht7rJzKKzMzZmVNC-Qr-LOhW3ZDcot-TZk7hAG62-Dm7ivsvB2PwJtU2BloOw8mgD12JC_-Jy1P85fxxyCI0_6O-WqtnPh1NyoidKD8xHO0Kwj0NmN3u6zunpkv7-dmhu85-lNzx8zg7MFQvMLTfNdHA9Njg9NFbo-LkJ29sP8AkPGQW7LWsBaMWVCth8HtdU0VWfe37QU9jHc4_jZDF8Aj2ahDqzD3XhgOoJeuJSLSi2TLPHQPgHpsHK5GFILqgV6-Y4pub6AT_5eql5jH4_NvzzLJs8inmXvOYNK7ybiD7hHoRG_4n0GiQUkWwTGJgc7udL11dAVEwbIyLDLAL_eDiWJOOvmmhOo2iTaZiHNmKHAg1lh2W_V5mV1jFItNfO8y1OqlUuWnu0p2tP-yarZ6W_rS49bITspYY9MNVTh6_mdFsHv_BxWG-XN-savj38SKQKFUlxBpCBb3DTWIeQWdOGR_-orqSzh43dOPSPaSjfMX464fP9VxGyDS1CPyRIZHRsBGnPUd8bD17lmbkqVLkzRN4hsUYSDJS1jSCi1E5O5PJKFhf4wn3EaicTErMNnl4gYQTzUyA_seq2hO22Pk7RH7drW_xyEgCGa6118Pu-smTSdOdc-GLCS5O6CD4x6we0SX_uiwphsPp1igYiJc=s150-no"
    );

    job7.setupWithImage(
      "Joyful Mouse",
      "Controle o cursor do windows utilizando um joystick https://github.com/zr0n/JoyfulMouse",
      [Category.C],
      "https://lh3.googleusercontent.com/t29qRm3SL1RXnY9s3FksG2M05M2_gF-Ql1vcg9tcSwCF90ziEqp1jy-WQF_gnvg-YH3W8ffPjCRVKf0NHwu0y8Q-VOgeuf5bJ68WHy6LwVVl_eULWcOehON08MlEAf7m5hml9TCXjHYo9vc_Q-GCcjXbOBDcsPOTfTmEZOizsTCObzznjP3DQjRtT98RQcYijXa1ELfzlk2gIiTRhxO-EuY0vzTKjsVugOmAQN9wBgRmOdFDxaHINiKzOmuqW-sqVL-VcJHMdFsJ5vKsFfYJcr53G-tXT7Rjzd_3i1xvfuQ4oxpakkVT85KaFdQBh2v4XNa1Oe7rLGHienLzfUi-swcw8D6MpKlqQq5J30ClltafYwMekKjyYFqUxybMh7BonIRWxjuteWBQX10lSCpSmMAq9vWuk0lxgZAqDfGHdXfHL88GyUMU6L0Hr9ir0tMMPANwL9GvFSN5Uoe0ldx1xa3E_bvRLL_i1qBEUkKxjlG2wdK4dBWJ59XirRZZ1QQGbuuUTGy1fd0TPG-fPXSqdCImwf1YnbmMV5L5NclE-Dc_WcuN74PlEF0wN0fxD19tX3572xEhyLVx60_wdP4xcQAq8hWn3fmtI4jmdQlbsM_wZShrOmmEK19ZuyVc06crEfs-uqbexh6fXSNTIajVu0__Wmm1UE9LDStKnUZ81ddffDdlBr4SkZGi0W8jcwRbnK0i8j6makCt0SRk4RcqYMB3=w978-h489-no",
      "https://lh3.googleusercontent.com/0gnW1GGfnukN-hHBvMxuG_4RU5gJtSzyNCary8OCpjN77RnCiHmBjPIKdpChYdP0wd5t99FTdKQuWUbcI9s6WZH-tg0IG3FvlqfkTJJVRpY5c23A5mvrEwuMbJ10P0ln1TIzxQJkE7vka7-_PXLsMkTdRHjv0SXKaKxkmQG8KwjGEs9UoeFSkOMTJo81cciZ9dAdjwAwOq0BvOMnJ_-gT48F6cfD9Z_ghjJ44Eku5y396cJA3WsEioI2eqlauZZpcR6crgnFfJ2JMzkGkW6D-iv8GCF29ZcFaXEMYVYTwCXgtVFo_HpV_7ZVFn-xy38K8We_NY5NS1JMzRIN97ERV_8c8uw2nEvOdx0I6Vldkb2qwpSdpw3m7dtzGElPAAl0DkD5lUwUp7g93RFKLhZ97iJ8ZBI_o1lH0BD1bTST6UpB1tk7d6eScPzGnD35Bq9KO9Iy_xK76_IQ1lNglMqpHJVgIaXkwFuTuJ2ItEu6k80YdXRL-gKpOVxZ-VFwP8Q_Y9TL7mH3o46O4QU5mLgQpdCvmXghCARHLWQ7wl5_cBSvzDCPkPCYcJc0uRHfFDYwlBLRG3TYlzTvWbREXIk0QqhCkIIsD893HDnRgHvLpNnmxFC-1dQN04-bahMRW2vwJQ46AGQgo4PtE31nQRKk2NfXAJ1LAi0=w142-h165-no"
    );

    job8.setupWithImage(
      "Joystickz",
      "Plugin que permite usar joysticks genéricos no Unreal Engine 4 https://github.com/zr0n/Joyztick",
      [Category.C],
      "https://lh3.googleusercontent.com/10fyyalFNAJC3UFV8IkEbHq7ttYcigVXQIPjBMIjF4qV7EuT8u8eUifIjmxSm3ZgBNwiS8EDWC4dedevULAoWKIdOso5A2O-5MI9JMfYLykIMg-LTDdRuL7IUjYDf2xvlzqSEODTzZUVFItMqRtqIe9ao3zo3MummFRVr-ggXSFcqYy_QSJ81SSZvHAyB_b2HNMeInWMh3HCZrKAfvvwqH0m5oxEFaSkRTPENNgQ4QwsA0-Yn_77P8-WqgR3ilqokfFom9k9F0JCn9UAJUCvTmXkXblniRQKYPuFeKWp3ir1OSpu0WUcQm-yR9j4HKTVhKjnLgzgdMeas0xJIfS8qDqgoN99R7SNNtcrg5TDs_QvVeJ2Y48f6e0_T5YK9IDm72maVECLFKUw1T-Ct5B8y3Uo11OzY1YKNYpXBq4HzpRq8oX6pMT-uzFkH5VtokrSWtomxe8OxHv6oLmQEIa-uoiGliq4dVuWCZnhOt1C-Lw6WBc2GyVCbChPkUXF92bCNdJmmmFvkZLXzcoaLYXSC-SwfF4I5U9i27KaHHyRwNV2ypuNqLYP1CmnITeMqosdfsjMWGc4e6u4qoij_mkiImugil3VA47gmFFZTAyN20hNuE8Dl__4VWXew3bUS89On_rm34npDOCrkDcW2YHxlfcVTUVccFKNGswNPxiflnRSH_59SuJaaKZ8xbj0nbSKUUF89LMgrS32PZc4y-zeA2wt=w259-h194-no",
      "https://lh3.googleusercontent.com/ESKR-sO2tepTZEBqX9cTn17Aaz9aR0ylj0U21MgH9FALmnmpc3hA9wwpgvdIBzP1Y7k6rCdyZ_IqhTaKfCR2pbO9573UCXSRURDC3F3A_e1iHBZM9lv1UAdIEsH4-HqdA9hTPbuDG06qjVCwHjucuHAcpXF2jedymWqAZRSMRcbpa2wZmituz9KDJUPE7PuQsJYfMk9Fu6sxwb4pxfmUJKRNeCC29jowvw2M96thEglUK9b0veskRZRjPeEe1ma9JL7AUkjzwWFa7BKQoeKOR8VBOzpGgB9ZAP5TQ6F99sntTpzXaPgdNmrK8gVsXjNrZT2eSMNL9WuY_nMZ6vlyGV2rGFwjES6GiyoN-w66Y9aIARPClJ9CaMMKOoSze0a7bJ5HNYfFOgC-anZDiO96J8KDfziF7LeBw36X5ep4tsBrXr6qZCUG0AIf69NlqQC7neYBJnCO-jSe3aDgmcPzYfVjOhK-mMiYBl3rIK42zQqXPeycxv6A2Pd0E0wbiPmAdHNn7xRAoe2RxSBs2LhOdY8Go5SVsv_nkNXea3Mss-YsQ8OVFYSeUORB9qa2Nas5OOk08Ijg6yKNPEl6jTcUwA7rcebBepYrQevPW3z2qVmBEM6qxQut9tu8ndkOz2tYWyLAhMTsnIdz0o50mXx-I1OChKkSIvE=s150-no"
    );

    job9.setupWithVideo(
      "Mana Source",
      "Um jogo multiplayer para smartphones utilizando react native e NodeJS",
      [Category.Javascript, Category.Android, Category.NodeJS],
      "https://www.youtube.com/watch?v=mMCPDqlHi2w",
      "https://lh3.googleusercontent.com/VJmmNC5WKGLGOHlIjvUzYI4eWmXr6V0IWSK2AE_uO7NLri2yACDpIG3tVOemAADZdrBzTkHCGsRhLEtvO91r9HXsvplgHux8X47kVOr7MhbcZKvWY4zFP2A0k-fCtCOqIZsfY8auDtEM0FTUa_rg0B6Sdvvuq8-msIXJKL5RIvXd6tfaYTAsj2nViAcTLa32cUJtqf9JF_Tq2lce1Me7lz-JEwbnCxEZ_h2Xj30kH049edYdNPgGu1UdtaCQOnk_8l02eMCFVeGjjKLtmcPMq1-Y-PL6riyzs7_tV9hfr5fdVL7d2HDDwROwEkRiim6uB4kLsK0to8fnaIUHp1eBOMBPpEoZJUtI4Wqx9TiiA-fNI1bie5V4RgExvWdS3_A544uC0Dsn008FtN_qEnMVbaZIQhTQgCQlWmi8VTHinJsD-Qpoj9RYn8_E1YBEGA-VUKMwefsAu2bDzLQrBt299ghof8JqKKJmSgDPfGi1TdGoguy4tK3INWTqW73YXdDqpB9NJoCM4ngYADiV70Zr2j82nAG6X3mu_HSZQkmA32s4-ZgAPaNJzdj4s9ry9VAkUJZxcDYcaFD8sHiu7J1T8f9xu_duk-VwVnLFu8kgdDwNr34kC_f-pLU7kkqaHGFS1WPdemWM5meUSoeJ7U8pp6YzIZkCVK4=s150-no"
    );

    job10.setupWithImage(
      "Smart PC",
      `Controle o windows usando um smartphone
      Client: https://github.com/zr0n/SmartPCApp
      Server: https://github.com/zr0n/SmartPCServer`,
      [Category.C_Sharp, Category.Java],
      "https://lh3.googleusercontent.com/CXtLREafhc2OeBqitQI3TNAFbZBemxfqp2pGcGxsjZlFfffxD83_LA9709i-VOtOiA4oN1lPG1qb4T8cISE51TXk3EPNFYpHBbgsHU6fv6u2QBvhELtD9OeR77tqDA_soLbc9REo8VcG7zd01wVGE1FfBAnh02cqH2j5aBIZnB5VJXfMddmKdbngkbyzvZ6bp7RkwkCMn28RAxkJgjzenpAkmyXA_vc29S5cKSQ5VDw3ftW7B8VdrHhTIWRAAQMhZKbaaTkpzSjkwa1hXcojF-OxfF2Wj7mTacS01KgMWMBVg6_K57b1VZDWhbklSaVUhCMUirH1_ZTcI_qN0uA-expBrkovCmSkW7rSNJHcCxvQFjN5vaEt6oofwKqqgCRAMizs8lmhbcGdtoveqqJCmS0-nC0p7OHf9mtScQkG3skfsKU0mNlr7rSuFX6Mld2LbhoFwEWWTT_k1pIjuSg892cv977yYX_33Y3FGN0qX0KQNIAg4Tuhi83QGWHFWtGDzFEJcX6igeP6s6JzaNUBltzKUh9EFUHy5AwkxUl8mKK9drn9kNMx9sB2YHEy1Ld7CcoTo9_WwqQcxKHD6uYC98ATfP1aWbMiwqEj6nqOAhkXp-YQ3jEigpjIjgzH1GUldmqcwptU9ZUpOgIDZYay9zcwigIHDU4OsGT6iFJ0cNSlFZCTSf0qmqVobbJm4AF4mU5zA7knwuhbsKy-UAGRMo_G=w791-h936-no",
      "https://lh3.googleusercontent.com/r6HOBWA1YCcFM48iD-88bn0raXiIggne6aru_7MkptobBUlnM2fvcnHxMiVoQD61wiCe-8-eaS1xSLfktW17PbvYrTv9MCnZ5Nr7ZIkhDu1EFr_H555HguqENvkap9EcoIyEBHnEC2Hk56MqcFoh4e60nAEjMIfeFcEn419b1qfpRUuoTp46tjZZKGp5sUvA40ytwl7Y6kBYQ2mWpysjLtRsVQapiYMd0LBG7pkCzrlXrAoQGvz0XwcM2ufTUzNhVKTjHCN4Rb54lFIEjzVfQRlKnUEGkbZtdG1k4UFNezd7emSY3dTqOwPDZ2raB_pDp3WsNtkb21RHG5pqJZFmjEte6zW_FWeVvygfblH3KQPKD1DvYiV1TBx5cTnn_DdqFtxkeKsQd_YY9lkY-7fJFP3saO3J9Ev_zri9r98R54lXVvZbrj_qreBz8QXrlShYE653skFyYVxYFeWzN_BfI9HpBnPvgh6LVTW1zzsNRguOzVJekgonPkoqYBicYR_djyzYXYgfi99CRPCkVTXkxeaMvxace7WSkRblwkRF3g_hR3IErCsYgPdyCEOzlKi1PoKPyTS0Z-X6NHZQqTRRqocrR3oJUjdXSEwe3x-IzypdtymwFUvp6xcH52zCHx6GKPNovHVNk-dq5B8uPZEj03jC4ez0BO0=s150-no"
    );

    job11.setupWithVideo(
      "Startrix",
      "Um game feito para android usando Unreal Engine 4 (usando praticamente apenas C++) https://play.google.com/store/apps/details?id=com.souluizfernando.StarTrix",
      [Category.C, Category.CPP, Category.Unreal, Category.Android],
      "https://youtu.be/PAeXFe6mhEE",
      "https://lh3.googleusercontent.com/ZAxCCnXJSzKQEjMHp3s1oeN-O-LfOWei-axDcVstFlflyF1DdEbmyVv_1NzBB9eAv6kTDbmSGT2XTz86hq1dEWyvdx58kptHBw5otpyG4ZyfGH4WkpYxGFGRvdiQ9mhEghA4bFt9pUSGygWKc8RR4TlrfuBJr8krvvupqjsI6sPxg9kNf2Vt_rVmZGNNGnsbuQsjmGU8-p9hGx974nuecm7RbCC5O0zBhzn-TSkosNMknD_raEVOWT2agyGqj1SE8CABdZYLzGgS-NIvp9W2iYviQa7qTIKUPPNELK3Wip6B9rgL3EXxRi0d15-v_H56J7yCDWdPN9sE3mpdZwPGE4gU42PIRcXwiYxQ9CSXdnq5Y2rMKyfbYgIa2g5SkH5myBmW1AMQb7A0pXyFMUjgCNDltC2_yrbx3s6X9Q8uRDGIwZcSgQQtzYC2YufnXiPjRaCKXXexeqrCMBhepOfMa6Y2IgA9bp1sImHITvAIvkwLjII5j2QOdB2GHGjWzfh1GUKltQuW0LikWry-lmf0HzOCMSxui5tZaJt66mO5fcgBmhJitmCWqTQg-89l9rB7wQ2qBA2jcd3w_9GEgDxFc855W3ZpICRMwOdrUtZolDl-N2tdrOXftxIOilGYqfJAfB79vPNPrG-uv2N8uqXyn1AdzCUlffs=w150-h151-no"
    );

    job12.setupWithImage(
      "Widget To Texture",
      "Um plugin que renderiza widgets UMG em texturas",
      [Category.C, Category.CPP, Category.Unreal],
      "https://lh3.googleusercontent.com/rCfNi1ctI3nL9U6ThYDlVyK7TGnfpu5NnRfvsx6KxCyMyp_u3-JTkhcP4uTz5GBxmM1Vqa9YeNgmnDJnPcdpGuXY6YV1Mb_L9YXHpINpbKyGQK9yZT3DmvAnoLv7jvKBG4BlIfPs52XEfEoX5v_3wPfcUiRpB30TYbRvAlnXlkHKl5d09Al7uS1O6o2TEUPZNUV4e2TvDnowD6FGaFtSQH9UdCdZQk_Na2NhFtdca5UDR1IDEhG7zZcx4yWZvY_ydiEjM6ST0kHKQpuj1JekHKgRlDGrEuOclMkQz8uuDKPdA7KkZklT8wi6wUTLhipk7XIfHj803nAJ693B6j1shT-895o9arAoiX7N1zUcUikXB3lbtBGmtbzxVP6Yl76zUrtYwdw89VWYMT7RBfdv7XJBVIWQXkNg5AnWHPelsX1joDklYW-okzXrLFplXxnD8o__UCjEyvH5Q6UtGh-UcT76dlUMr8dho7jF8pxV-CStoMp2_vS4Ij1aA8cVJjmk3FwP4-9nZCmLLK730dKEM--Vpkc5agKjJ6273FdZpklDeoTKxf3Afp_II2Z__ZL9yPSb5KbKAZhasWlbpPLuGMd9zDSBnNA2Tp7YcVNqAKrrVDdudXml7iwCiAj8QrWkce07MBy7xxHl4KS8WMVEgaBUuGEYUe4=w960-h600-no",
      "https://lh3.googleusercontent.com/r99NQRipMdxWmAxuktf-uNvBNhQkceAoWCC_YAXrrJghO1md_Ry5bHHRWrSecV2F6418Bgvs14f6ot0kIw7MLLw1mvtBOCu6M8IlfsRghHRD8TQ0fbRTI26XyrllgfovEOgjF6rWnwEvbV6_j_3efSXEKCMOGlOUKx8zOmvyxjSKTxAEEplOyh57OuGoAona5O8mGWISLQk6GcFC0O0Uox1ftuwILpdwhTJQhnSRWTqYmKetF8DgyMuX8Fq4zH_XUKqAttiQcYJtTytoEcPMrqKBhwVKQ7E4hlG6oHSA7OkmQLAZ6FXN1JZPpvxjlgOgb7tu1MX8Ech5UilmY4mIyuu0LsZX8wVtFo6wOUj8mJwT1a5_W2b9U32ZeptYlGJRWBS3i4T1TfoenquxlhwO5Msue5tvYYQYU2TxStf8-AZD8KO1uusxrDWtsm30csjKJz-T2_ZdpYfnf6ypBZo3-3y9XW9rA0Q3UxJ44_90UsCZFT-9edbJTsmpTwq9EpjJCRlYQz3HgIQ8ODGdTu7HuXu4u4burG7XS4qbaV32dDURaoFxvaSuFhlVjgj1Ots81754YGqUqtaHy8JorOPgt85OIUnvuztIWZ2rs3nnk1dANIPSAGDlVF5PAzw5SG9inSMZgtchO-dJTmuy_jVXafDNLj_izbQ=s150-no"
    );

    job13.setupWithVideo(
      "Air Gear",
      "O Air Gear é um jogo MMO criado com um server dedicado em NodeJS. ",
      [Category.C, Category.CPP, Category.Unreal, Category.NodeJS],
      "https://youtu.be/iOtN3Bah5nw",
      "https://lh3.googleusercontent.com/W_U3X5PxHdpTgAIfKUgqxAtpGLNUC4wLB_74IOhmiRCJHBBw_sDEyKthfkj1mESxnuaHBX_w86M7NV6fc0PH1HAkpVQymsvvvlP1zhn3P3FTQkwyf_c-F_ydQVyxWkx3U_3CBEXZ8biNuxbkcR3J1D-1tDbbXXyM-HYHLkOYLJNz99fX4ZCtDLDK_4lL5OXmSuu0K5ASdwO_sii6IKPjtM4c76pfGSEZAbwTJU2ZNwT3J5zX9wjDdb7RKUeDLJlLNNr8pyLkuOLHTCvm8QiXyNy1EEF-twoUC5gx08yrZ0WUaKLfn7Jcq-f38xIibukqf2_Vf0aMUqT4H0vflmWERQmYK4euZbGWlR0G1q9cGZXDj31Gw4YYaaY7WB27xP2yIdr_eP8gQgy7x8wmYcfwoF4s_nhhHbsOvXahnSgBMXNaL24qvrpgVjjIukYN5yv8zq3kT7ZIzgb3IVxJId_Q_HkfD5RIIYKMSumgr_X3Tq9dLcD0-PwR4A3hCAzGU9vp1DP3vcClXDGQd2R3jp0xXric0kGJdRfiuQ0mbKAHsPNfSYlX9JndjwWSQyw0-0YenKK32-sfMbhK2RLlLhSepFbGByjvw-DPnfadGcgoCo0itskRi3c6hs74qIzgN5tWYmH2Is1v4IPmyLkZFtnvYSDlpCivBA4=s149-no"
    );

    job14.setupWithVideo(
      "Play Outside",
      "Esse foi um jogo feito para a Unreal Summer Jam em 2018 e faturou um prêmio em uma categoria especial",
      [Category.C, Category.CPP, Category.Unreal],
      "https://www.youtube.com/watch?v=sUfcW8zIhZg",
      "https://lh3.googleusercontent.com/j41WGiLwiPQTRwj0F84MyqNntE1swwMqG8oCFAAtfWJGGlaIE_lJV5CqPZwqldxOuukQbZYNFtdAsKlvDMNg-gtf3DOYzTKWzIh8csm6wVfIYuZFYW06auyaMHMuVIYl3DiqWpHKmJBWRsgs7HPzzNV2w7SJNXfniDD0zU4ZufkD2_ccLBPPvjooh0tDQS9r6ruXmRzHq9bgqS8fQEeTHq16w7H-UNzWe3ZzA_y1kisb6C_vO8pzo90-YxYEb-yA6eNNKMDfWAQak9WcCxg-EbiphHTF5hUrt2ToC4GINP_X1GMdu2qLt3lOuu0CJoPLDnw2f_LoGRRPQm7zJoviIvB36mRup2tM2QW1tnaUj2ltniqe40hvRS1r_0Phcmzfxsj4xF8_o6ebKBay61GLXw4DDeqkTGsuXgLL08yO_oiw34PrjEZ4z9JWxZeMzLoH6cDvvg-TgSqx_-W3Uwg6ECD4-Q_XVFSIcWo3ddGPwfyGso1pRWv4Jk6_hUskK3GIlyZK_pvFbTVmQQJb21KuZT5FtMH0eb6szewwhtMV_cCUtruJsKiEMboi4UdpZjvi1Sl1KbEffkraE0OlrydzW0Ujmg3JKRKB5Bwrg7s6s4kK2zpbride8e2u0d2Dbrf0Ezgf98pYkhh9SmBS1egpbKSvRFNlMkY=s150-no"
    );

    job15.setupWithVideo(
      "Equinox",
      "Jogo campeão na Game Dev League em Julho de 2018. O jogo é um top down que se alterna e entra em Third Person Shot durante alguns momementos.",
      [Category.C, Category.CPP, Category.Unreal],
      "https://youtu.be/8epB3arAVvk",
      "https://lh3.googleusercontent.com/CrjO1PXElMECmcq_LL8qaIgZ4rN0MZvSIL9JiHtaGfagxJK1e6FC4x3EcjMlI6WUrHFVwJMqqv8PA_VeCU5Rl2ySVvDeS9ILblpVlHqpHcyJAQpf80-stNT_YXkMViyoTImWVFuL9004MvtRqK9lzmREQ9A1b5a8dlyrsTz25FoxQrC0ZJuT2PxOiD_XXt_qZJlKNR2PESxOzMO28e_ixd1UesO_gVhaD4l9xMtSYJoFfTSXPbnECyvpiKOUS6y92PS7j52jjS0WtSvGQHlgY3OK4OEUuIik_I-Xlk7H8XrDWjCiedjPwv7TEXUnWzHEoBfbe1SmZvPyzO5SBISkHR-e8gi_NEJgR_i8ositjmEDqfladAFL98OVP1Nd4KURQ4jDHU8Ad7yADm1V6dyp7t3l16jEzPTZa1dkZ2Bw8A8xFA8jNROOBHDj2r5IiLmtpszb0flfC8eqe1kQVotTvBOJ6BaDvi0cbPtpmhSgOF4pL5l2Apd6yfkX81r1NlvjZ6g-q9mfnX1NTGnwB72B8EMqWPsNCvTdxrmZeI3kQMMTgOWOP64JUsXdYZgzpBaxINR5W087eDkK4UVbpYnCYjAuJQAmcCmqLPlNrcMlrKSAWJ5F6Vzw5Q7123AJohQRDE8VQrx1QVJuiqFk0bssxBpbFOCUfLU=s149-no"
    );

    job16.setupWithVideo(
      "UR01",
      "Jogo desenvolvido para a Two Colors Game Jam. Como o nome sugere, só podíamos usar até 2 cores em toda a paleta do jogo.",
      [Category.C, Category.CPP, Category.Unreal],
      "https://youtu.be/OwFFJ65aJr4",
      "https://lh3.googleusercontent.com/DV7soFImZ4qZqUafOarRsOadP4s5OmcL8NPIvM3bGw4sq-RG9xG3RvWWPiWbmjQGLE_pkzhT2fUsvzk7jM-hjjuzIyc32bYnkm3XWR_SSABMg-rWAQhlkiBdMdyYR8TUdYb69ErkOeKpuQaEhBByDvCXALevhNEGBzD72zS7GuNrv3x9vbiVTk0g77zCpcrhni21jhRmC5PwHEfnRRg3hPu3OKh9ZAACrlJg4ZGoyQbFVGXwCARqqFdjLiKn7PLK7_qEgcGhlE7eicXDmBFlPfGPGVgQsF2AYO2kXbY7SKbyRXTBB2dstBFUwn2E2A_XIyOgZ5nuErT4MJ6Ik24wDAHCbqLbM1gDpRs8h2h6qFZrEEVOlmbC6JJgAzKJq8mNQUMWBCfOneEuVbbU5x4Jx2tl6LRKp8OEupee6LRJeS1g1LuBOtJ7DJ1gPthA2JmlsbKE8CC88J7Bl1lX0X_T7jB9ylS2dYtCh0TR6t2W5jAZx_hLun2mHbjPlUX7RuvLorHAFD-4_S7PwjlJvNms4uQNMU_qjaGftYv0owBWsplPHAAjysaWtEBIg4_kjjo5vyhwYUoiTkAJJrW4XYFA03DuuqCnR7zXO8Jl3-4f0Pt8aCL_j_R2gTijnxAQgdQmxrFwsbrUPOFaTiU4cZTCzI5tyu7cF68=w150-h152-no"
    );

    job17.setupWithImage(
      "Hungry Birds",
      "Esse jogo é uma paródia de angry birds. Você deve alimentar os passos famintos com as cores corretas. Jogue pelo browser: https://luizfernando.itch.io/hungry-birds",
      [Category.C_Sharp, Category.Unity],
      "https://lh3.googleusercontent.com/-LQHWuhKWrMp4cHELlRKMAGkezLWbcsD3lMJ6E7Svy2ETSdUVBS0_Vs_oiBTMNyDKiJIfn-3zMhyKhVhJPhB981MU5N2UhhlzWI8pN6v-RYjD63UFCy1W3HuYMRZ-7_mG0FG3Y8Ajy7pwCnteeAM_XbMh7B3xNhi5SLKVqyBt6R9wIYCIwZQXYVaYHpLgFFKqS_ykHzLCA7CPCQlN2L4iyTdpE12AfW_XQn-enmyE2Seri0ElmRfQ4Jbtx4xWIuAksJroD09G4STmb7S5-7aId9l16rsNbZvRWgSSYOLl-2M7NIv_9c4xT3vAT90jU3a8dwziAH9PJ1kukGZ8tGFGIdyoRKGkOqA4go_IiScsKOPNsDyZghLtgGeG8yN0rokBPS5Ya19VSXHydBudxOpVX_WdICi-6V09CRZrt3pEYXZ20-JGWeQRa1x7V2u9IUEsyeITgp-wUkQ6eoSG4uzGwaWdT_gtWrK9M6MVRjW00thgeoJDlBMYuXhgnsAY1M5kwvVXPVYX-nqrk53441FW1J-aNnV5tyqR4uBmYAFVTUQgRM9yCe97LddYBiR6tCs5VSmX89c80ChoI8FW6FJ1mBr5sscw3Bfj1pUFkHqU92ynDMvOT5i9_URXZlFHdBR-l7sMNHIMDyESqh_fbnJJrN-7bRWu9A=w1651-h877-no",
      "https://lh3.googleusercontent.com/qxKMV7Q2bIZmIwLF3u8YnC1L8AVdHx1kvqYXJoMxFWJFejkuRgdh00T_P2PKvpuysjHhcKe7Ud_NqEk006zEOQzkTniqW4r5FSL73dKdBOXZvVe6K-ufTnmNiU0mrahwL0Cpu81yXBAd1cQDWh3mlzXxG7iveK7CC07TuBlDYSz9_xJd8AXtO1KDxUKsM1caVDrmO8bjg03Ya4Vb-xHDeOxcM2k5nf40VibnzkYJ9geQfHxwJd5QZWYEjFPPtXZVPYDwLHHT2rsTWXzYJIoyEpl8OITZmKNFfjCxhGB7AoE7M_NNwff6FOdktwluwo9eqDyOveW5Y9AoK0LfMlaP1BBMWfUoKXS1wkVygY3uPuvXaXVwVS2wV9EW_m259WU8XsOesbCQaLaelcK2f6_MMtSN4U39Nbx2rZxhDB1FVAgUsOQRetIAdI-dkMRKMC-JhlOuDvlIixiNvyvXooEsbDMlIsmbLOXdQbsF5RZu-kzEAgFYI0OR7xu0RP1Scf1dnFpwL3uT0Svpg1zcrziszb6BBTOGtvz8dLBf-wFgKOr6IoC4v958ubX3EkNqI7fEU91RVKmun8FI9QLE10u__86dkP0db_GevL9u0SKcKwQLxp757Ml1N55GP51wgm370KBdESuC6iMVB0fxNsJGhd7rxkhJzd8=s150-no"
    );

    job18.setupWithImage(
      "Portfolio",
      "Esse portfólio foi feito usando Angular JS 7 sem nenhum template.",
      [Category.Javascript, Category.NodeJS, Category.AngularJS],
      "https://lh3.googleusercontent.com/CQkcmSaHJy3PX583jh0AOjyusL3YY5vzpiELV9J8myNbwtkrd9COx4XLLpmI8vZ8TV_aVIqdkrxdIvlJE8-4APs7w9DmzHpTdIrHFd8HqUkh6RZ_yl-qXoUP81Cfy2nGsh_JlGv2hVK9uCZbqr-suDKafLxkyWpfPoefkbDj1s0_5z0GIEP8K5JOf9iJlfsgRHaFlU9P39TT1Yii_UmUZm-uu_bpdZgdyhuITfJaOLLql14ya4Ze_sAmq9F62wMajklSWiCbrhNaiiJkoiyWG1YBb7nKxLSLYSWeU_7SXIJ_bKkKl41UclpHe5_nvEjxalfoowdoevsLsk7eG4JH9IB9-41-vg6mXZYt9Xt1E6hTT-foSaUd7nNVYexNIkBKGu3idBA3kDbOnmsdunnWoqli8Amv5XEp5l8gqwd-M-hB8wJ1PcRMZX4ev4AYExqrAfmLdeFgdE3S72xBZXw8JYyliXAlzsIv2MuHxoyM8yLK11SbkogRh4ZricS-sfzAyhOL2-K_E8xMq1tfxi42ExkL8g__HePBVEvzBETLm9U53Ba3wQOsK0Lw6oR8ICjrhVerxPrO7jgUtfG3QAlpCCqM9drNTu0zK6kMsGcPGmZgRHWbHlSceFvXag77eivnAgI5-tCMFsk6t0bG1eI63GJ9U3ivuuE=w960-h471-no",
      "https://lh3.googleusercontent.com/y_GV81oyXM2vpK8rvwOGNuynRBC85MFw__GlJQ2f71oW3-WHXjLOXXcIWMrHcjfpMBPEQUud4LZS-UpjiR09w-KLX0zJ2zQqGGW95LlHnvI2GfqOvQz2uJ1AJDwA0zx6DveaiYZ-76Xns4vtICDGDSkEojQIe-1Fyq_l4SOAwsEgaaCaKK8LuLmC1ErRSL4C1S9OsYZB0jdI1ISmLba-EO9E-roBt-ywVw3kwi3-goKjLpx5NDaGAcYZ1Sxj3iCeBbXy5XHLpJOjGzd01RgMALP2zDweVyNDEougJBxS_paq_ucSmwZAtr-f289FJGrNKdX4_G5uhqHIeZLG_yPhpcd1kBFmyES9qUtOh1MSCoeIzpKNpaCzITW7cRWCiFOxhGzMIHlPkOJxk7U4AFERD9CEL0fEJMo3LApJ2mYjBjIteRmFeMDK9Z2-izx744BiauvcphD2mhSjoxaXaY3Zvfi9CdwFVb2fowaDVn9UBVvLWiBg9HstaKzDMMqt35SMqCIDIfDm88fOUUrKubFoytPTJfi-RQnHWnrdZqjvHQlypb2uM1fivPcWPZpaazDSY3fT7QoD_d8poHKsQirW8MCuMrcPgsuRTO8pSj05wTq0QhZo7rSuaPwXJeXXWyvY4grdfOeZZnp84d_Nat0R-mKGAKzyNXA=w150-h123-no"
    );

    let allJobs : Job[] = [];
    allJobs.push(job0, job1, job2, job3, job4, job5, job6, job7, job8, job9, job10, job11, job12, job13, job14, job15, job16, job17, job18);
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
