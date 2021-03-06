
var courses = [

{
"Name": "Cybersecurity", 
"Description": "This course covers security topics that impact web developers. Explore the OWASP Top 10 security vulnerabilities. Get hands on practice of security-related web programming tasks including providing authentication, validating input, logging and monitoring, attacking vulnerable web applications and completing Capture The Flag (CTF) challenges. Learn to protect web applications against attacks from malicious hackers.",
"ImgURL": "https://imageio.forbes.com/specials-images/imageserve/60269ef7ada7085ce688069b/Cyber-Security-and-Digital-Data-Protection-Concept/960x0.jpg?fit=bounds&format=jpg&width=960",
"Link": "https://youtu.be/sbEGxAqIyT8",
"id": "1"
},

{
"Name": "Intro to Software Development",
"Description": "This course covers the programming foundations through a hands-on approach students will exercise every day logical thinking and JavaScript language. The products, could be like a calculator, branching stories, buble sort, and even the Battleship game. Maybe simple, but essential - the first steps to become able to program wathever the mind imagines.",
"ImgURL": "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
"Link": "https://www.youtube.com/watch?v=s9iPo9YMU70",
"id": "2"
},

{
"Name": "Database Design",
"Description": "This course covers data storage for web applications. Students will learn about the common categories of data storage used by web applications, how to design a data-model, how to use SQL language and how to write server-side code that interacts with a database.",
"ImgURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAACzCAMAAACKPpgZAAAA3lBMVEX///8rqEUAAAAmmEcdHRsbGxnw8PDl5eUYGBZBQUDq6uopo0YPDwwTExAXFxUnmkfQ0NDIyMcrKyn39/eEhINfX17c3NsHBwAonke0tLR+fn1ubm0noketray/v79RUU+ampliYmE4ODYdpTxzc3IwMC6QkI/3/PikpKNFRUQAoS51uoiwsLAjIyGCgoGLi4qc06ax27jW7tuY0aI+r1SCyZDs+O5bt22Ly5jA4cbS6tdJs151wIQFnDhnuHoWlj2XyaNFpmCGwJVooHeEooxrtX9AqFWQpZdZqGnBzsZFcs4dAAAJtUlEQVR4nO2ai3ajRhKGcS93AwZhYCQNAiEJo4kkjyfOXJyZTGaT3WTf/4W2GrqbRpYSWYwt7Z76jo8PlxZ0/1R1VTUoCoIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgyP8CNzen7sG58u7tqXtwrvx4j0azk7vZDI1mF29nFxcX707dizPkpzcgzOz+/an7cXa8pcJQadBqutzNLhpmH3AWlnnHhaHSnLoz58TNPZPlEph9PHV3zoiPM0mZyy+fTt2fs+FB+FKtzAUGKM7PXWUuv3w+dY/OhE/t9HvJpHk4dZ/Og9ZkLl43XKLRUB7eXGwr8xqNhvJZciauzOUvp+7VGfD+vjWZy1cCLBKUuze7lPn6z1P36/R8mO20mVen7lcXPY6Nmphh6J3zRhd9z2WehORMF5dXQpgv5+VOc0ISlUIYqjWubHHaIJrKqDeW87T3LR8uZGX+ccX5+mvvS39H9GvLIaamaSaxsqxwCXE8h5Cpwc5PCpW4cFojBP6ICyfNSc973s12K3P1y3mtRoT60AFjcIKQEleR58LemptGGBpLT1WTNNR1v1wSVfWcYb87fuwqI3F2xdPYUTWNW4ni0+GbJBenJ1QOv97U5+B63iDsdbsP+5T5enbJXk5UszDa/esE5hRS8d3AVTWmjKJkYFGkn9HIE3BXmbte130GKlDGsqUDIJWqOVwMUEYVylADkuzpCG5me5X5tc91n4NHylD/Up2I7XRsxvA0Nbnuc7ebN3uV+aHPdZ+Dx8roNFgnQbPTVQaid+tox/B0ZcKdm3tabJ3YdWbfRR4ff6yMcgszrTNutjveFEMMT3ylBwcro1fUNo18nI3YMxrOo+ltvHU9uxpNo/F1J5cI/VEO/yfzKBpvJRlGPoqmo7QZbjsQv4S28+2L71DGB6fRSLPdsRmYgsj8EAH2cpAywfDaImSp2BvIsFyH0Ie0suhmQspOR8d1fpokZLFqjujDauwR6OSkgPbw26lkC0HUNCckqtLVcskOw6XZVaKONvljZXSaxJCYKyNsJoB4Pu0XtA9RZgXd9FR3PFHJoCA0HN4aWd13+sBW7cVKQqzUD0orUT3STH8wdkdTnfktbe/S7L59kpuEjAwlmEMYcenpUX2UXno88Sejtas6rmxjI+eRMsoU5mAyEcq4qQ81VbDxvEWvSYayPzaJajuMN2tTVddkGhiGn0G+tR6QLI390jRVdymqt5I4Ub1jjwlPNIyycOpyZ1mmVUY3Cc9IcuI0KtHJQl2sl/UJG4TJ68O+5aqeJ1nNLmVGXWXUpjJING1RGko/fj4oavuSD4MBm4NmrvHBHgibdmAaMNe8N6CBuW4GFdLUddBk8Skoltw2TQyog9gVByBwzIacJS4Pwza1Nr6jHKSMuR6s1w61Tg0Msp87fT4oB7Yho5qy7YCoovPg+nykoaM5G94+hsEyf1KGRHVG7Dio5EZNh0tiLpi5gdEQXzQmwoNSOmwu/EHKNE/PSKPEBG0WW42fxt1eZeS6CdIDHhwVY2G6Gdv2HZUrtoIxtaX/nNY4YrAi5xrCDMQGN3aEMpNWDpBOuJsSFqaacFH/QplG1U7UHtLVCDJWevCwR5mrb3KtLStjW60y8UDj9gNatE+bGhYfoqwM9N4suDLawBCNWVt7De7Z3hau6RVib+8MHPJrt1G77oBscE/n5n63Mt3lTlmZMHKFMkZhMmXCzOPhsx5i6wiyMr6mcWVg1DzyTAg/aFBB29vCT7W12Ns8VkavJ71mu2MzoCPM65LBHcFPs93KdArKA5VpbUYHR/hrZSBv444YuTwt2lIm7ihznTzO9GgRwH7btRllAs9G9PMoHvYo01m4OlCZdp6hD5P5/x5lbKh5mh/4xHFYGKmVaRdxqTKq2NvhTRABNB7htpShovVT5kZaoWmV2aoN/l4Z6vE8TClMmWaIe5ShUV6FFMnPPRLxSdeG5FGyPFDGW4q9HcrQrIF7zJY3UWWYNxnBcbnNpzYNft1OwN11qwOUKSGYZyKD0Bcm9/99yijVAMSE3HeRtz8DQZO24PBham7VHtHEqDNGWi+IIxDhtr2pWbsqy2FVHpXbtEYjlLn6s9tEVgZ6v0uZeq1IdAzcgvv/XmUUe06KUT6RO72BuWQhDuSkXZhqlNHkSmoCuW4bfqTVTgokSV59qzy4HlXxrXIE7ador3ameUqtjDBrOWpLyihrqK2E6efEW7CHuVcZPSdShssaUH3FKDI3kVKSuSNrTxNB05UKq/rRCJ3oFFWbTJiHU2Vs50cZjQhPXJlHbygNmqGxbbswPaFMm8/QLE4ku7bliem4TFRnlzK+lXhWvL0OE4FhqDyam54q2Qitq91MTEnXjkkKKWGha5+iM/7SNRujDVMlykqlOkqZ9/w7EaHM9hsVGgPWbERDiAGsJlLSRNUWvHe0aCZjesbIEl4b1EFL2FgFj92r2uaes5yOr/NqKASwYfLRSP2EA9dpbSCMS5q7qa63qSZBUM3pe6VxG8bsyQKqXjWJ0sAOhhsHysrm0YS34bVfKsfZjPCnb0yY7od69hJKNIC4uaKPCfE8zyXUDEqXbTOTvyWO6RB1bMGsytbt/QFxNE1zSAH9nBL6Ns0kZEpH5BOwAc2jizyAeHNkRAQeN7GmUDdnQjCd1Petb8copJUtm65x0Dd1cKeGtZAiHaZKNcyPEoZXT7Pfrh5V2bSvA8vKsmxpFaBMVFg1BfjNnG0PxCL1dEGHuc4q/jCHZD2ooUsLi6TZdrL6dGqZqufCgKgtmML7wiob0MWfRSTNzf7CksmmZSC/u17R08WAUWTziXQ2vU3z41/mfqxD9+9fqTD/2j6p6/Q+oa6H9f8GKhnbNKQXzMFkEkhzgx6wN/QBtPHZjs8arKhpRAWICU5mDsRgwhiu4ndzEL3Ddg/rXtn8a4DtEju0+6xH0K/r//3HTmGeiXBEGttR9GG91NX3RfRz8eNs9mf17errDy/0PluP5JXabqV+Zrx989vq9y8v9UURCONIXhevtV5LBs/Lpz+q6j8vdbMVMS1purAtV+u1Ave8BFXVd1n5YDaJJq9++2uy2d/45PhV+l0+4zqEFdQM0quyOSEvdusjiKvV3zf6ThgDTxXfTOkjovV61frcxFXPz5SeQko01VnM0zhOR4WU7Z4ldvWS4aGCfN9sknmnPGdXUmhe/qImbedLKstivDpzXejnCi8WmtgNaVLf700igiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8v/IfwF/OMfiF1BaOwAAAABJRU5ErkJggg==",
"Link": "https://www.integrate.io/blog/the-sql-vs-nosql-difference/#:~:text=SQL%20databases%20are%20vertically%20scalable%2C%20while%20NoSQL%20databases%20are%20horizontally,data%20like%20documents%20or%20JSON.",
"id": "3"
},

{
"Name": "Cross Platform Application Development",
"Description": "This course covers technologies that enable web developers to use their existing skills to create desktop and mobile applications. Students will gain the additional skills required to develop cross-platform applications.",
"ImgURL": "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?cs=srgb&dl=pexels-pixabay-267389.jpg&fm=jpg",
"Link": "",
"id": "4"
},

{
"Name": "Software Testing and Quality Control",
"Description": "This course covers writing unit tests for software as one of the best ways for developers to level up their skills. It focuses on using Jest.js an NPM package for software testing and setting up a CI system to run software tests",
"ImgURL": "https://prod-discovery.edx-cdn.org/media/course/image/b43f2cde-b38f-4717-8399-033f0aba61f4-bd6f44692f21.small.png",
"Link": "https://www.youtube.com/playlist?list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr",
"id": "5"
},

{
"Name": "Front End Programming",
"Description": "In this course, students can practice programming using the web browser console, use script tags, event handling and manipulate the Document Object Model.",
"ImgURL": "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"Link": "https://bioub.github.io/dom-visualizer/",
"id": "6"
}

]