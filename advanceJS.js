class dateOfBirth{
    constructor( year, month, day, TotalAge){
        this.year = year;
        this.month = month;
        this.day = day;
        this.TotalAge = TotalAge;
    }
    vieDateOfBirth(){
        console.log('Year:', this.year );
        console.log('Moth:', this.month );
        console.log('Age:', this.day);
        console.log('Age:', this.TotalAge );

    }

}

const Age = new dateOfBirth('2024', 'August', 'Friday', '15' )
const NextYear = new dateOfBirth('2025', 'August', 'Monday', '16')
const UpperYear = new dateOfBirth('2026', 'August', 'Thusday', '17')

Age.vieDateOfBirth()
NextYear.vieDateOfBirth()
UpperYear.vieDateOfBirth()





