#include <iostream>
using namespace std;

int binarySearch(int arr[], int n, int key){
    int start = 0;
    int end = n-1;
    int mid = start + (end - start)/2;
    while (start <= end){
        if (key == arr[mid]){
            return mid;
        }
        
        if(key > arr[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }

        mid = start + (end - start)/2;
    }
    return -1;
}

int main(){
    
    int evenArr[6] = {2, 4, 7, 10, 15, 19};
    int oddArr[5] = {3, 6, 8, 17, 21};

    int even = binarySearch(evenArr, 6, 7);
    cout << "Key 25 is present at index " << even << endl;

    int odd = binarySearch(oddArr, 5, 6);
    cout << "Key 22 is present at index " << odd << endl;

    return 0;
}