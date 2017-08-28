export class StaticResources {
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

    public static ORGCHART():any[]{
        return [
            //resources/workplace/01DIS OVERVIEW/02-Organizational Chart.jpg
            { image : 'assets/workplace/dis-overview/02-Organizational Chart.jpg' }
        ];
    }

    public static STRATEGIES():any[]{
        return [
            //resources/workplace/01DIS OVERVIEW/02-Organizational Chart.jpg
            { image : 'assets/workplace/dis-overview/strategies/Strategy-1.jpg' },
            { image : 'assets/workplace/dis-overview/strategies/Strategy-2.jpg' },
            { image : 'assets/workplace/dis-overview/strategies/Strategy-3.jpg' },
            { image : 'assets/workplace/dis-overview/strategies/Strategy-4.jpg' },
            { image : 'assets/workplace/dis-overview/strategies/DIS-Strategies.jpg' },
        ];
    }

    public static FUNCTIONALTOWERS():any[]{
        return [
            //resources/workplace/01DIS OVERVIEW/02-Organizational Chart.jpg
            { image : 'assets/workplace/dis-overview/04-Functional Tower.jpg' }
        ];
    }
}
