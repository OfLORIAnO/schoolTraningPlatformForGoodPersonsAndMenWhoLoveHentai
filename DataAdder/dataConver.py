from copy import copy

from Prefixes import PrePri, Zs, bs, mm, All

f = open('DataAdder/data.txt', encoding='utf-8', mode='r')

# print()

def inputDots(word):
    dottedWord = ''
    for symbol in word:
        if symbol in All:
            indexOfLetter = symbol
            dottedWord = word[0:word.index(indexOfLetter)] + '..' + word[word.index(indexOfLetter)+1:]
    return [dottedWord, word]

def convertArray(arrayOfWords):

    arrayOfWords = list(set(arrayOfWords))

    allWordsConverted = []

    prePriArray = []
    ZSArray = []
    bsArray = []
    mmArray = []
    AllArray = []

    oldArrayOfWords = copy(arrayOfWords)


    #? прЕ\прИ
    for word in arrayOfWords:
        for prefix in PrePri:
            if prefix in word:
                if oldArrayOfWords.count(word) > 0:
                    oldArrayOfWords.pop(oldArrayOfWords.index(word))
                prePriArray.append(inputDots(word))
    if prePriArray:
        allWordsConverted.append(prePriArray)


    #? З\С 
    for word in arrayOfWords:
        word2 = inputDots(word)
        for prefix in Zs:
            if prefix in word and word2 not in ZSArray:
                ZSArray.append(inputDots(word))
                if oldArrayOfWords.count(word) > 0:
                    oldArrayOfWords.remove(word)
    if ZSArray:
        allWordsConverted.append(ZSArray)


    #? Ы\И
    for word in arrayOfWords:
        for prefix in bs:
            #TODO Доделать логику
            if prefix in word and word not in prePriArray:
                if oldArrayOfWords.count(word) > 0:
                    oldArrayOfWords.remove(word)
                bsArray.append(inputDots(word))
    if bsArray:
        allWordsConverted.append(bsArray)


    #? Ъ\Ь
    for word in arrayOfWords:
        for prefix in mm:
            if prefix in word:
                if oldArrayOfWords.count(word) > 0:
                    oldArrayOfWords.remove(word)
                mmArray.append(inputDots(word))
    if mmArray:
        allWordsConverted.append(mmArray)


    #? Остальное
    for word in arrayOfWords:
        for prefix in All:
            word2 = inputDots(word)
            if prefix in word and\
                word2 not in prePriArray and\
                word2 not in ZSArray and\
                word2 not in bsArray and\
                word2 not in mmArray:
                if oldArrayOfWords.count(word) > 0:
                    oldArrayOfWords.remove(word)
                AllArray.append(inputDots(word))
    if AllArray:
        allWordsConverted.append(AllArray)


    allWordsConverted.append(oldArrayOfWords)
    return allWordsConverted


for arrayOfWords in f:
    arrayOfWords = arrayOfWords.split(' ')

allWordsConverted = convertArray(arrayOfWords)

# print()
# print('пре при', allWordsConverted[0])
# print()
# print('з с', allWordsConverted[1])
# print()
# print('ы и', allWordsConverted[2])
# print()
# print('ъ ь', allWordsConverted[3])
# print()
# print('остальное', allWordsConverted[4])
# print()
# print('лишнее', allWordsConverted[5])


f2 = open('DataAdder/dataFormed.txt', encoding='utf-8', mode='w')

for type in range(len(allWordsConverted)):
    typeNum = allWordsConverted[type]
    if type == 0:
        typeName = 'prepri'
    elif type == 1:
        typeName = 'zs'
    elif type == 2:
        typeName = 'bs'
    elif type == 3:
        typeName = 'mm'
    elif type == 4:
        typeName = 'all'
    else:
        typeName= 'Лишнее'
        f2.write(typeName + ': [ \n')
        for pair in range(len(allWordsConverted[5])):
            pairNum = allWordsConverted[5]
            f2.write('    [' + pairNum[pair] + '],' + '\n' )
        f2.write(']')
        break
    
    for pair in range(len(typeNum)):
        pairNum = typeNum[pair]
        if pair == 0:
            f2.write(typeName + ': [\n')
        line = '    ' + "['" + pairNum[0] + "', '" + pairNum[1] + "']," + ' \n' 
        f2.write(line)
        if pair == len(typeNum)-1:
            f2.write('],' + '\n')
f.close()
f2.close()
