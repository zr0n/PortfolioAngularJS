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
      "https://www.dropbox.com/s/n6kjb4otq4f9ecu/Home.png?dl=0",
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
      [Category.Unity],
      "https://youtu.be/mDV-g5btxxM",
      ""
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
      ""
    );

    job8.setupWithImage(
      "Joystickz",
      "Plugin que permite usar joysticks genéricos no Unreal Engine 4 https://github.com/zr0n/Joyztick",
      [Category.C],
      "https://lh3.googleusercontent.com/10fyyalFNAJC3UFV8IkEbHq7ttYcigVXQIPjBMIjF4qV7EuT8u8eUifIjmxSm3ZgBNwiS8EDWC4dedevULAoWKIdOso5A2O-5MI9JMfYLykIMg-LTDdRuL7IUjYDf2xvlzqSEODTzZUVFItMqRtqIe9ao3zo3MummFRVr-ggXSFcqYy_QSJ81SSZvHAyB_b2HNMeInWMh3HCZrKAfvvwqH0m5oxEFaSkRTPENNgQ4QwsA0-Yn_77P8-WqgR3ilqokfFom9k9F0JCn9UAJUCvTmXkXblniRQKYPuFeKWp3ir1OSpu0WUcQm-yR9j4HKTVhKjnLgzgdMeas0xJIfS8qDqgoN99R7SNNtcrg5TDs_QvVeJ2Y48f6e0_T5YK9IDm72maVECLFKUw1T-Ct5B8y3Uo11OzY1YKNYpXBq4HzpRq8oX6pMT-uzFkH5VtokrSWtomxe8OxHv6oLmQEIa-uoiGliq4dVuWCZnhOt1C-Lw6WBc2GyVCbChPkUXF92bCNdJmmmFvkZLXzcoaLYXSC-SwfF4I5U9i27KaHHyRwNV2ypuNqLYP1CmnITeMqosdfsjMWGc4e6u4qoij_mkiImugil3VA47gmFFZTAyN20hNuE8Dl__4VWXew3bUS89On_rm34npDOCrkDcW2YHxlfcVTUVccFKNGswNPxiflnRSH_59SuJaaKZ8xbj0nbSKUUF89LMgrS32PZc4y-zeA2wt=w259-h194-no",
      ""
    );

    job9.setupWithVideo(
      "Mana Source",
      "Um jogo multiplayer para smartphones utilizando react native e NodeJS",
      [Category.Javascript],
      "https://www.youtube.com/watch?v=mMCPDqlHi2w",
      ""
    );

    job10.setupWithImage(
      "Smart PC",
      `Controle o windows usando um smartphone
      Client: https://github.com/zr0n/SmartPCApp
      Server: https://github.com/zr0n/SmartPCServer`,
      [Category.C_Sharp],
      "https://lh3.googleusercontent.com/CXtLREafhc2OeBqitQI3TNAFbZBemxfqp2pGcGxsjZlFfffxD83_LA9709i-VOtOiA4oN1lPG1qb4T8cISE51TXk3EPNFYpHBbgsHU6fv6u2QBvhELtD9OeR77tqDA_soLbc9REo8VcG7zd01wVGE1FfBAnh02cqH2j5aBIZnB5VJXfMddmKdbngkbyzvZ6bp7RkwkCMn28RAxkJgjzenpAkmyXA_vc29S5cKSQ5VDw3ftW7B8VdrHhTIWRAAQMhZKbaaTkpzSjkwa1hXcojF-OxfF2Wj7mTacS01KgMWMBVg6_K57b1VZDWhbklSaVUhCMUirH1_ZTcI_qN0uA-expBrkovCmSkW7rSNJHcCxvQFjN5vaEt6oofwKqqgCRAMizs8lmhbcGdtoveqqJCmS0-nC0p7OHf9mtScQkG3skfsKU0mNlr7rSuFX6Mld2LbhoFwEWWTT_k1pIjuSg892cv977yYX_33Y3FGN0qX0KQNIAg4Tuhi83QGWHFWtGDzFEJcX6igeP6s6JzaNUBltzKUh9EFUHy5AwkxUl8mKK9drn9kNMx9sB2YHEy1Ld7CcoTo9_WwqQcxKHD6uYC98ATfP1aWbMiwqEj6nqOAhkXp-YQ3jEigpjIjgzH1GUldmqcwptU9ZUpOgIDZYay9zcwigIHDU4OsGT6iFJ0cNSlFZCTSf0qmqVobbJm4AF4mU5zA7knwuhbsKy-UAGRMo_G=w791-h936-no",
      "https://lh3.googleusercontent.com/r6HOBWA1YCcFM48iD-88bn0raXiIggne6aru_7MkptobBUlnM2fvcnHxMiVoQD61wiCe-8-eaS1xSLfktW17PbvYrTv9MCnZ5Nr7ZIkhDu1EFr_H555HguqENvkap9EcoIyEBHnEC2Hk56MqcFoh4e60nAEjMIfeFcEn419b1qfpRUuoTp46tjZZKGp5sUvA40ytwl7Y6kBYQ2mWpysjLtRsVQapiYMd0LBG7pkCzrlXrAoQGvz0XwcM2ufTUzNhVKTjHCN4Rb54lFIEjzVfQRlKnUEGkbZtdG1k4UFNezd7emSY3dTqOwPDZ2raB_pDp3WsNtkb21RHG5pqJZFmjEte6zW_FWeVvygfblH3KQPKD1DvYiV1TBx5cTnn_DdqFtxkeKsQd_YY9lkY-7fJFP3saO3J9Ev_zri9r98R54lXVvZbrj_qreBz8QXrlShYE653skFyYVxYFeWzN_BfI9HpBnPvgh6LVTW1zzsNRguOzVJekgonPkoqYBicYR_djyzYXYgfi99CRPCkVTXkxeaMvxace7WSkRblwkRF3g_hR3IErCsYgPdyCEOzlKi1PoKPyTS0Z-X6NHZQqTRRqocrR3oJUjdXSEwe3x-IzypdtymwFUvp6xcH52zCHx6GKPNovHVNk-dq5B8uPZEj03jC4ez0BO0=s150-no"
    );

    job11.setupWithVideo(
      "Startrix",
      "Um game feito para android usando Unreal Engine 4 (usando praticamente apenas C++) https://play.google.com/store/apps/details?id=com.souluizfernando.StarTrix",
      [Category.C, Category.CPP, Category.Unreal],
      "https://youtu.be/PAeXFe6mhEE",
      ""
    );

    job12.setupWithImage(
      "Widget To Texture",
      "Um plugin que renderiza widgets UMG em texturas",
      [Category.C, Category.CPP, Category.Unreal],
      "https://www.youtube.com/watch?v=Dm7gzVpfPK0",
      ""
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
