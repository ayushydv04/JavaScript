#include <iostream>
using namespace std;

int sum(int arr[], int size){
    int total = 0;
    for (int i = 0; i < size; i++){
        total = total + arr[i];
    }
    return total;
}


int main(){
    int size;
    cin >> size;

    int arr[100];

    for(int i = 0; i < size; i++ ){
        cin >> arr[i];
    }

    int result = sum(arr,size);
    cout << "Sum is " << result;

    return 0;
}

