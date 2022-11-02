const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

   let totalBatteries = 0;
        function sumofArray(sum, num) {
             return sum + num;
        }

        totalBatteries = batteryBatches.reduce(sumofArray, 0);


