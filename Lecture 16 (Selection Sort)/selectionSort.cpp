#include <iostream>
using namespace std;

int main(){
    
    int arr[4] = {4, 3, 2, 1};

    for (int i = 0; i < 3; i++) {
        int minIndex = i;
        for (int j = i+1; j < 4; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }   
        }  
        swap(arr[i], arr[minIndex]);
    }
    
    for (int i = 0; i < 4; i++){
        cout<<arr[i]<<" ";
    }
    
    return 0;
}