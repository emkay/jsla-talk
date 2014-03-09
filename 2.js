header({prg: 1, chr: 1, map: 0, mir: 1});

reset();
vblankwait(1);
clrmem();
vblankwait(2);

palette();

loadBg();
loadAttribute();

asm('\tLDA #%10010000');
asm('\tSTA $2000');
asm('\tLDA #%00011110');
asm('\tSTA $2001');
asm('Forever:');
asm('\tJMP Forever');
asm('NMI:');

setLowHighBytes();
 
joyInit();
joyRead({label: 'ReadA'});
joyRead({label: 'ReadB'});
joyRead({label: 'ReadSel'});
joyRead({label: 'ReadStart'});
joyRead({label: 'ReadUp', cb: moveUp});
joyRead({label: 'ReadDown', cb: moveDown});
joyRead({label: 'ReadLeft', cb: moveLeft});
joyRead({label: 'ReadRight', cb: moveRight, done: enableBg});

asm('\trti');
asm('\t.bank 1');
asm('\t.org $E000');

pData();

write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write(' javascript');
write('');
write('');
write('');
write(' 1995');
write('');
write('');

write('');
write('');
write(' netscape');
write('');
write('');
write('');
write('');
write('brenden eich');
write('');
write('');
write(' microsoft adpots in 1996');
write('');
write('');
write('');
write('');
write('');

write('         ecma tc39');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write(' blah blah blah browsers');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');

write('');
addBg('36, 36, 252, 253');
write('');
addBg('36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,254, 255');
write('node');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');
write('');



loadNametable();
attributeTable();

asm('\t.org $FFFA');

vec();
bank(2, '$0000', '\t.incbin "js-la-3.chr"');
