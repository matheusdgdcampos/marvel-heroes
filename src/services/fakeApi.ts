import { Image } from 'react-native';

import {
  ImageDoctorStrange,
  ImageVision,
  ImageWandaMaximoff,
  ImageUltron,
  ImageCivilWar,
  ImageInfinityWar,
  ImageUltimato,
  ImageWandaVision,
  ImageIronSpider,
  ImageHulk,
  ImageThanos,
} from '../assets/images';
import { TopHero, PersonsList } from '../models';

export function getTopHeroes(): Promise<TopHero[]> {
  return new Promise(resolve => {
    const heroes: TopHero[] = [
      {
        name: 'Wanda Maximoff',
        image: {
          uri: Image.resolveAssetSource(ImageWandaMaximoff).uri,
        },
        description:
          'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário.',
        appearances: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltron).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageCivilWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageInfinityWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltimato).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageWandaVision).uri,
            },
          },
        ],
      },
      {
        name: 'Visão',
        image: {
          uri: Image.resolveAssetSource(ImageVision).uri,
        },
        description:
          'Visão é um sintezóide – um andróide composto de sangue e órgãos sintéticos. Ele foi criado por Ultron para destruir os Vingadores, mas ao invés disso ele se voltou contra seu “pai” e faz parte da equipe de super-heróis desde então.',
        appearances: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltron).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageCivilWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageInfinityWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltimato).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageWandaVision).uri,
            },
          },
        ],
      },
      {
        name: 'Doutor Estranho',
        image: {
          uri: Image.resolveAssetSource(ImageDoctorStrange).uri,
        },
        description:
          'Nascido em 1930, Strange era um neurocirurgião incrível e, por isso, também era extremamente arrogante. No auge de sua carreira, ele sofre um acidente de carro e acabou danificando os nervos das mãos.',
        appearances: [
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltron).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageCivilWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageInfinityWar).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageUltimato).uri,
            },
          },
          {
            image: {
              uri: Image.resolveAssetSource(ImageWandaVision).uri,
            },
          },
        ],
      },
    ];

    return resolve(heroes);
  });
}

export function getPersonsList(): Promise<PersonsList[]> {
  return new Promise(resolve => {
    const persons: PersonsList[] = [
      {
        name: 'Homem-Aranha',
        description:
          'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
        image: {
          uri: Image.resolveAssetSource(ImageIronSpider).uri,
        },
      },
      {
        name: 'Wanda Maximoff',
        description:
          'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário.',
        image: {
          uri: Image.resolveAssetSource(ImageWandaMaximoff).uri,
        },
      },
      {
        name: 'Thanos',
        description:
          "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.",
        image: {
          uri: Image.resolveAssetSource(ImageThanos).uri,
        },
      },
      {
        name: 'Hulk',
        description:
          'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner.',
        image: {
          uri: Image.resolveAssetSource(ImageHulk).uri,
        },
      },
    ];

    resolve(persons);
  });
}
