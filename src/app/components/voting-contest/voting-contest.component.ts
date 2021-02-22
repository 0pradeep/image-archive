import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-contest',
  templateUrl: './voting-contest.component.html',
  styleUrls: ['./voting-contest.component.css']
})
export class VotingContestComponent implements OnInit {
  maxVote: string = '';

  constructor() { }

  ngOnInit(): void { }

  getWinner(votings: string): any{
    var votesInfoObj = {};
    for(let i = 0;i < votings.length; i++){
      if(votesInfoObj.hasOwnProperty(votings[i]))
        votesInfoObj[votings[i]] += 1;
      else
        votesInfoObj[votings[i]] = 1;
    }
    var dictArray = Object.keys(votesInfoObj).map((key) => {
      return [key, votesInfoObj[key]];
    })
    dictArray.sort((candidate,votes) => {
      return votes[1] - candidate[1];
    })
    if(dictArray !== null)
      this.maxVote = dictArray[0][0];
  }
}
