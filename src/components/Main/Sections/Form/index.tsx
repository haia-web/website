import type { iFormData } from 'types/iFormData';
import { useState } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { fetcher } from '@services/fetchers';
import { ContainerS } from './styles';
import VectorLight from '../../../../assets/svg/vector-light.svg';

export const Form = () => {
  const [formData, setFormData] = useState<iFormData>({
    name: '',
    email: '',
    tel: '',
    privacyPolicies: false,
  });

  function submit() {
    if (!formData.privacyPolicies)
      return alert(
        'Para prosseguir com o envio você deve aceitar nossos termos de Políticas de Privacidade',
      );
    const dataCvCRM = {
      nome: formData.name,
      email: formData.email,
      telefone: formData.tel,
      idempreendimento: 4,
      origem: 'SI',
      midia: 'Google LP',
      conversao: 'CoreAg',
    };
    return fetcher
      .post('https://rve.cvcrm.com.br/api/cvio/lead', dataCvCRM)
      .then((res) => {
        alert(
          'Recebemos seu formulário.\n\n Entraremos em contato com você em breve',
        );
        setFormData({
          name: '',
          email: '',
          tel: '',
          privacyPolicies: true,
        });
        return res;
      })
      .catch(() =>
        alert(
          'Ops... Houve um erro ao enviar seu formulário.\n\n Por favor tente novamente mais tarde.',
        ),
      );
  }

  return (
    <ContainerS className="mx-w" id="form">
      <div className="vector">
        <VectorLight />
      </div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          submit();
        }}
      >
        <Input
          type="text"
          placeholder="Nome"
          required
          value={formData.name}
          onChange={({ value }) =>
            setFormData((data) => ({ ...data, name: value }))
          }
        />
        <Input
          type="tel"
          required
          placeholder="Telefone"
          min={14}
          max={15}
          value={formData.tel}
          onChange={({ value }) =>
            setFormData((data) => ({ ...data, tel: value }))
          }
        />
        <Input
          type="email"
          required
          placeholder="E-Mail"
          value={formData.email}
          onChange={({ value }) =>
            setFormData((data) => ({ ...data, email: value }))
          }
        />

        <div className="terms">
          <Input
            required
            type="checkbox"
            checked={formData.privacyPolicies}
            onChange={({ checked }) =>
              setFormData((data) => ({ ...data, privacyPolicies: checked }))
            }
          />
          <span>
            Li e estou de acordo com a{' '}
            <a href="https://www.haiaboavista.com.br/pdfs/politica-de-privacidade.pdf">
              Políticas de Privacidade
            </a>
          </span>
        </div>

        <div className="submit">
          <p style={{ fontSize: '0.75rem' }}>
            Pode preencher tranquilo. Você não está assumindo compromisso nenhum
            preenchendo esse formulário.
          </p>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </ContainerS>
  );
};
