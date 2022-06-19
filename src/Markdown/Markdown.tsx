import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6
} from '@bluebase/components';
import { isMobile, useTheme } from '@bluebase/core';
import React from 'react';
import { Dimensions, Image } from 'react-native';
import MarkdownComponent, { MarkdownProps } from 'react-native-markdown-display';

const rules: any = {
	heading1: (_node: React.ReactNode, data: React.ReactNode) => <H1>{data}</H1>,
	heading2: (_node: React.ReactNode, data: React.ReactNode) => <H2>{data}</H2>,
	heading3: (_node: React.ReactNode, data: React.ReactNode) => <H3>{data}</H3>,
	heading4: (_node: React.ReactNode, data: React.ReactNode) => <H4>{data}</H4>,
	heading5: (_node: React.ReactNode, data: React.ReactNode) => <H5>{data}</H5>,
	heading6: (_node: React.ReactNode, data: React.ReactNode) => <H6>{data}</H6>,
	image: (node: { attributes: { src: string } }) => {
		const deviceWidth = Dimensions.get('screen').width;
		return (
			<Image
				style={{
					alignSelf: 'center',
					height: isMobile() ? deviceWidth - 32 : deviceWidth / 2,
					width: isMobile() ? deviceWidth - 32 : deviceWidth / 2,
				}}
				source={{
					uri: node.attributes.src,
				}}
			/>
		);
	},
};

export const Markdown: React.FunctionComponent<MarkdownProps> = (props: MarkdownProps) => {
	const theme = useTheme();
	return (
		<MarkdownComponent
			style={{
				body: {
					color: theme.theme.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.87)',
				},
			}}
			rules={rules}
			{...props}
		/>
	);
};

Markdown.displayName = 'Markdown';
