import random

list = ["apple","shower","bicycle"]
word = random.choice(list)

turns_left = 5

print("Welcome to Hangman!")
print("You get five turns, during each of which you must guess a letter of the word.")
print("You can also guess part of the word or the entire word.")

letters = []

while turns_left > 0:
    if turns_left < 5:
        print(f"You have {turns_left} turns left.")
        print("Already used guesses:", end=" ")
        print(",".join(letters))
    guess = input("   Guess a letter or part of the word: ")
    if guess.isalpha():
        if guess in word:
            if guess == word:
                print("You guessed the word correctly!")
                turns_left = 0
            else:
                letters.append(guess)
                print("Your guess is in the word!")
                print("")
        else:
            letters.append(guess)
            print("Your guess is not in the word :(")
            turns_left -= 1
            print("")
    else:
        print("Your input must be a letter. Try again.")
if guess != word:
    print(f"You lost. The word was: '{word}'.")


            

