function Female(name, tasteMin, tasteMax) {
    this.name = name;
    this.tasteMin = tasteMin;
    this.tasteMax = tasteMax;
    this.mates = [];
    this.addMate = function(male) {
        if (male.size > this.tasteMin && male.size < this.tasteMax) {
            this.mates.push(male);
        }
    };
    this.showMatesReaction = function () {
        console.log(name + ' mates:');
        for (var i = 0; i < this.mates.length; i++) {
            this.mates[i].tellReaction(this);
        }
    };
}

function Male(name, size) {
    this.name = name;
    this.size = size;

    this.tellReaction = function(female) {
        if (isPartner(female, this)) {
            console.log (this.name + ": Yay! I'm the partner of " + female.name + " :)");
        } else {
            console.log (this.name + ": I was rejected by " + female.name + " :(")
        }
    };
}

function isPartner(female, partner) {
    for (var i = 0; i < female.mates.length; i++) {
        if (female.mates[i] === partner) {
            return true;
        }
    }
    return false;
}