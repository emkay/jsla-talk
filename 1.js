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
write('jsla');
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
write('');
write('');
write('');
write(' nintendo entertainment system');
write('');
write('');
write('    1985');
write('');
write('');
write('');
write('');

write('');
write('');
write('');
write('');
write(' 8 bit console');
write('');
write('');
write('');
write(' cpu is a modified 6502');
write('');
write('');
write('          total of 64kb of memory');
write('');
write('');
write('');
write('');
write('');

write('');
write(' ppu does graphics display');
write('');
write('');
write('       apu has 5 channels');
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
bank(2, '$0000', '\t.incbin "js-la.chr"');
