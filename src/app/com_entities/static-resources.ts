export class StaticResources {
    async addToSlide(fileName:string,slideCollection:any){

    }
    
    public static PROGRAMS_ASPIRE="";
    public static PROGRAMS_CARES="";
    public static PROGRAMS_CAREERS="";
    public static PROGRAMS_DIGERATI="";
    public static PROGRAMS_MOTIVATE="";

    public static MISSIONVISION():any[]{
        //add { image : 'path'} for any collection of images for mission vision
        return [
            { image : 'assets/workplace/dis-overview/01-Mission Vision.png' }
        ];
    }
}
