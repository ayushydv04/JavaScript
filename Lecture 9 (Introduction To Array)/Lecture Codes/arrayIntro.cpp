#include <iostream>
using namespace std;

void printArray(int arr[], int n){
    cout << " Printing Array " <<endl;
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    
    }
    cout << " Printing Done " << endl;
    
}


int main(){

    //Declaring an array
    int number[15];

    printArray(number,15);
    //Accessing value from an array

    // cout << "Value at index 0 is " << number[0] << endl;
    // cout << "Value at index 5 is " << number[5] << endl;
    // cout << "Value at index 9 is " << number[9] << endl;
    // cout << "Value at index 14 is " << number[14] << endl;

    //Initiasing an array

    int number2[3] = {5, 7, 11};
    printArray(number2,3);

    // accessing an element
    //cout << "Value at Number2[2] at index 2 is " << number2[2]  << endl;

    int num3[10] = {2, 7};
    printArray(num3,10);

    // cout << "Value at Num3[0] at index 0 is " << num3[0]  << endl;
    // cout << "Value at Num3[1] at index 1 is " << num3[1]  << endl;
    // cout << "Value at Num3[4] at index 4 is " << num3[4]  << endl;
    // cout << "Value at Num3[7] at index 7 is " << num3[7]  << endl;

    //Initialising all location with 0

    int num4[7] = {0};

    printArray(num4,7);

    // cout << "Value at Num4[0] at index 0 is " << num4[0]  << endl;
    // cout << "Value at Num4[1] at index 1 is " << num4[1]  << endl;
    // cout << "Value at Num4[4] at index 4 is " << num4[4]  << endl;
    // cout << "Value at Num4[6] at index 7 is " << num4[6]  << endl;



    //initialising all locations with 1 [not possible with below line]
    int fifth[10] = {1};
    printArray(fifth,10);
    int fif[15];
    printArray(fif,15);
    //But possible with fill_n() function

    //fill_n(arrayName, size, value);

    fill_n(fifth,10,1);   

    // cout << "Value at fifth[0] at index 0 is " << fifth[0]  << endl;
    // cout << "Value at fifth[1] at index 1 is " << fifth[1]  << endl;
    // cout << "Value at fifth[4] at index 4 is " << fifth[4]  << endl;
    // cout << "Value at fifth[6] at index 7 is " << fifth[6]  << endl;

    fill_n(fif,15,6);
    //Filling value 6 in full array


    // cout << "Value at fif[0] at index 0 is " << fif[0]  << endl;
    // cout << "Value at fif[1] at index 1 is " << fif[1]  << endl;
    // cout << "Value at fif[4] at index 4 is " << fif[4]  << endl;
    // cout << "Value at fif[6] at index 7 is " << fif[6]  << endl;
    
    char ch[5] = {'A', 'Y', 'U', 'S', 'H'};

    for (int i = 0; i < 5; i++)
    {
        cout << ch[i] << " ";
    }
    


    return 0;
}