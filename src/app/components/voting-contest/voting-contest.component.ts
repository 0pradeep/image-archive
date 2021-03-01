import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-contest',
  templateUrl: './voting-contest.component.html',
  styleUrls: ['./voting-contest.component.css']
})
export class VotingContestComponent implements OnInit {
  maxVote: number = 0;

  constructor() { }

  ngOnInit(): void { }

  getWinner(votings: string): number {
    var votesInfoObj = {};
    for (let i = 0; i < votings.length; i++) {
      if (votesInfoObj.hasOwnProperty(votings[i]))
        votesInfoObj[votings[i]] += 1;
      else
        votesInfoObj[votings[i]] = 1;
    }
    var dictArray = Object.keys(votesInfoObj).map((key) => {
      return [key, votesInfoObj[key]];
    })
    console.log(dictArray);
    
    let i = 0;
    dictArray.sort((candidate, votes) => {
      console.log(i , votes[i]);
      console.log(i , candidate[i]);
      i += 1;
      return votes[1] - candidate[1];
    })
    console.log(dictArray);
    
    if (dictArray !== null)
      return dictArray[0][0];
  }

  getWinner1(votings: string): void {
    this.maxVote = this.getWinner(votings);
    console.log(this.maxVote);
  }
}
