let num =process.argv[2];
function diamond(n)
{
    if(n<11 && n>1)
    {
        for (let i=1;i<=n;i++)
            {   
                for(let j=n-1;j>=i;j--)
                {
                    process.stdout.write(" ")

                }
                for(let k=1;k<=i;k++)
                {
                    process.stdout.write("* ")

                }
            process.stdout.write("\n")
            }



        for (let i=0;i<=n;i++)
        {   
            for(let j=1;j<=i;j++)
            {
                process.stdout.write(" ")

            }
            for(let k=n-1;k>=i;k--)
            {
                process.stdout.write("* ")

            }
        process.stdout.write("\n")
        }

    }

    else
    {
        process.stdout.write("Enter value between 2 to 10")
    }
}

diamond(num);