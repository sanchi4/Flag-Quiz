export class QuestionData {

    answer: number;
    candidate: Array<{ area: number; index: number }> = [];
    enable: boolean;
  
    constructor(areaGroupCount: Array<number>, questionRange: Array<boolean> = []) {
  
      var i, j, rand;
      var countryCount = 0;
      areaGroupCount.forEach(function (count) {
        countryCount += count;
      });

      var targetCountryCount = 0;
      if (questionRange.length > 0) {
        for (i = 0; i < areaGroupCount.length; i++) {
          if (questionRange[i]) {
            targetCountryCount += areaGroupCount[i];
          }
        }
      } else {
        targetCountryCount = countryCount;
        areaGroupCount.forEach(function () {
          questionRange.push(true);
        });
      }
  
      this.answer = Math.floor(Math.random() * 4);

      var selectCountry: { area: number; index: number } = { area: -1, index: -1 };
      for (i = 0; i < 4; i++) {
        if (this.answer !== i) {
          rand = Math.floor(Math.random() * countryCount);
          for (j = 0; j < areaGroupCount.length; j++) {
            if (areaGroupCount[j] > rand) {
              selectCountry = { area: j, index: rand };
              break;
            }
            rand -= areaGroupCount[j];
          }
        } else {
          rand = Math.floor(Math.random() * targetCountryCount);
          for (j = 0; j < areaGroupCount.length; j++) {
            if (questionRange[j]) {
              if (areaGroupCount[j] > rand) {
                selectCountry = { area: j, index: rand };
                break;
              }
              rand -= areaGroupCount[j];
            }
          }
        }

        if (this.candidate.some(function (e) { return (e.area === selectCountry.area && e.index === selectCountry.index); })) {
          i--;
        } else {
          this.candidate[i] = { area: selectCountry.area, index: selectCountry.index };
        }
      }
  
      this.enable = true;
    }
  
    public disabled() {
      this.enable = false;
    }
  }