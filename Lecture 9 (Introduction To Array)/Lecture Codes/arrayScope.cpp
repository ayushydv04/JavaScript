#include <iostream>
using namespace std;

void update(int arr[], int n){

    cout << endl << "Inside the function" <<endl;
    //Inside the update function
    arr[0] = 120;

    //Printing array

    for (int i = 0; i < 3; i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    cout << "Going back to main" << endl;
    

}

int main(){
    
    int arr[3] = {1, 2, 3};

    update(arr,3);

    cout << "Printing main function" << endl;
    for (int i = 0; i < 3; i++){
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}