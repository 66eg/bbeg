import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MetadataService } from '../../shell/metadata.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    faLinkedIn = faLinkedin;
    founder: Member = {
        id: 1,
        duties: 'Leadership & Inspiration; Funding; Software Engineering & Implementation',
        games: 'Mutants & Masterminds, Marvel Champions, Gotham City Chronicles',
        image: 'assets/brewer.png',
        linkedIn: 'https://www.linkedin.com/in/michaeltheengineer/',
        name: 'Michael Brewer',
        title: 'Founder'
    }
    employees: Member[] = [
        {
            id: 2,
            duties: 'Architectural Design; Systems Design; Engineering Best Practices & Controls',
            games: '',
            image: 'assets/boles.png',
            linkedIn: 'https://www.linkedin.com/in/jesse-boles-45279a6a/',
            name: 'Jesse Boles',
            title: 'Principal Software Architect'
        },
        {
            id: 3,
            duties: 'Software Development, Automated Testing, Quality Assurance',
            games: 'Pathfinder, Vampire: the Masquerade, Shadowrun',
            image: 'assets/howell.png',
            linkedIn: 'https://www.linkedin.com/in/michael-howell-bt/',
            name: 'Michael Howell',
            title: 'Software Engineer'
        },
        {
            id: 4,
            duties: 'Information Security Risk Assessment & Policies; GDPR, PCI, SOC2, & ISO Compliance',
            games: 'Rifts, Dungeons & Dragons, Mage: the Ascension',
            image: 'assets/lauderbaugh.png',
            linkedIn: 'https://www.linkedin.com/in/tonilauderbaugh/',
            name: 'Toni Lauderbaugh',
            title: 'Information Security Analyst'
        },
        {
            id: 5,
            duties: 'Community Building, Talent Recruitment, Employee Advocation, Human Resource Policies',
            games: 'Who Goes There?, Scythe, Star Realms',
            image: 'assets/russig.png',
            linkedIn: 'https://www.linkedin.com/in/jrussig/',
            name: 'Jochen Russig',
            title: 'Talent Manager'
        }
    ];
    members: Member[] = [];

    constructor(private metadataService: MetadataService) {
    }

    ngOnInit() {
        this.metadataService.updateMetadata({
            title: 'Team | BBEG',
            description: 'Meet the BBEG team! These people make the magic happen.',
            keywords: ['team', 'software engineer', 'security', 'human resources'],
        });
        this.members = this.shuffle(this.employees);
        this.members.push(this.founder);
    }

    openSocial(url: string) {
        window.open(url, '_blank');
    }

    private shuffle(arr: Member[]): Member[] {
        let m = arr.length;

        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }

        return arr;
    };
}

export interface Member {
    id: number;
    duties: string;
    games: string;
    image: string;
    linkedIn: string;
    name: string;
    title: string;
}