#include <iostream>
using namespace std;

int main()
{

    int arr[10] = {1, 2, 3, 4, 3, 4, 8, 5, 0, 0};

    int ans = 0;

    for (int i = 0; i < 10; i++)
    {
        ans = ans ^ arr[i];
    }

    for (int i = 1; i < 10; i++)
    {
        ans = ans ^ i;
        
    }

    cout<<ans;
}
