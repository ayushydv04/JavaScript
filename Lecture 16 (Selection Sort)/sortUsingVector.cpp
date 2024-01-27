//Here we'll be using vector also.

#include <iostream>
#include <vector>
using namespace std;

#include <iostream>
using namespace std;

void selectionSort(vector <int> &arr){
    int n;
    n = arr.size();

    for (int i = 0; i < n-1; i++)
    {
        int minIndex = i;
        for (int j = 0; j < n; j++)
        {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]); 
    }
    
}


int main(){
    
    vector <int> arr = {64, 89, 99, 4, 7, 2, 8};

    cout << "Array before Sorting"<<endl;

    for (int i : arr) //here in this for loop we only initialized int i which will take value from array index and then with a colon (:) we passed array_name
    {
        cout << i << " ";
    }
    cout<<endl;
    selectionSort(arr);
    cout << "Sorted Array"<<endl;
 
    for (int i : arr)  //here in this for loop we only initialized int i which will take value from array index and then with a colon (:) we passed array_name
    {
        cout << i << " "; 
    }
    cout<<endl;
    
    
    return 0;
}


/*Certainly! The line for (int num : arr) is a range-based for loop in C++. It's a convenient way to iterate through all the elements of a container, such as a vector, without having to deal with indices explicitly.*/